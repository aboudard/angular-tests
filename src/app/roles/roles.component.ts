import { Component } from '@angular/core';
import { UserStore } from '../user.store';
import { User, admin, client, everyone, manager, reader, readerAndWriter, writer } from '../user.model';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HasRoleDirective } from '../has-role/has-role.directive';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, HasRoleDirective, NgIf],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  user$: Observable<User | undefined>;
constructor(private userStore: UserStore) {
  this.user$ = this.userStore.user$;
}
admin() {
    this.userStore.add(admin);
  }
  manager() {
    this.userStore.add(manager);
  }
  reader() {
    this.userStore.add(reader);
  }
  writer() {
    this.userStore.add(writer);
  }
  readerWriter() {
    this.userStore.add(readerAndWriter);
  }
  client() {
    this.userStore.add(client);
  }
  everyone() {
    this.userStore.add(everyone);
  }
}
