import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {TaskDetailPage} from '../TaskDetail/taskdetail';
import { Task } from '../../data/task.interface';
import Tasks from '../../data/dummyTasks';
import { task1Page } from '../TaskDetail/taskCode/task1';
import { task2Page } from '../TaskDetail/taskCode/task2';
import { task3Page } from '../TaskDetail/taskCode/task3';
import { task4Page } from '../TaskDetail/taskCode/task4';
import { task5Page } from '../TaskDetail/taskCode/task5';


@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage implements OnInit {
  taskCollection: { category: string, tasks: Task[] }[];
  constructor(private navCtrl: NavController) { };
 taskdetailsPage = TaskDetailPage;

  ngOnInit() {
    this.taskCollection = Tasks;

  }

  onGoToTask1() {
    this.navCtrl.push(task1Page);
  }

  onGoToTask2() {
    this.navCtrl.push(task2Page);
  }

  onGoToTask3() {
    this.navCtrl.push(task3Page);
  }

  onGoToTask4() {
    this.navCtrl.push(task4Page);
  }

  onGoToTask5() {
    this.navCtrl.push(task5Page);
  }
  onGoRoot() {
    this.navCtrl.popToRoot();
  }
}
