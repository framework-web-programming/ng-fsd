import { NgModule } from '@angular/core';
import { TasksFilterModule } from 'features/tasks-filter';
import { MaterialModule, SharedModule } from 'shared';

import { TasksListPage } from './tasks-list.page';

const EXPORT_COMPONENTS = [TasksListPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule, MaterialModule, TasksFilterModule],
  exports: EXPORT_COMPONENTS,
})
export class TaskListModule {}
