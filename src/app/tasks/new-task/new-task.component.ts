import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  
  @Output() create  = new EventEmitter<Task>();

  title = '';
  summary = '';
  dueDate = '';

  onSubmit() {
    const newTask: Task = {
      id: Math.random().toString(),
      userId: this.userId,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    };

    this.create.emit(newTask);

    this.title = '';
    this.summary = '';
    this.dueDate = '';
  }
}
