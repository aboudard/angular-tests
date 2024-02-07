import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { UserStore } from '../user.store';
import { Role } from '../user.model';

@Directive({
  selector: '[hasRole]',
  standalone: true,
  // don't provide UserStore here, or you won't share the state
})
export class HasRoleDirective {

  userStore = inject(UserStore);

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
    this.userStore.user$.subscribe((user) => {
      this.viewContainer.clear();
      if (user && ((Array.isArray(this.hasRole) ? this.hasRole : [this.hasRole]).some((r) => user.roles.includes(r)) || user.isAdmin)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  @Input()
  hasRole: Role | Role[] = [];

  

}
