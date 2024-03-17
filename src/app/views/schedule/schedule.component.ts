import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

    tasks: any[] = [];
    selectedTasks: Array<[string, number]> | null = null;
    selectedDay: number = -1;

    constructor() {}

    ngOnInit() {
        this.tasks[0] = [['Levar o lixo', 9], ['Passear o cão', 13]];
        this.tasks[1] = [];
        this.tasks[2] = [['Levar o lixo', 12]];
        this.tasks[3] = [];
        this.tasks[4] = [];
        this.tasks[5] = [];
        this.tasks[6] = [];
        this.tasks[7] = [];
    }

    ngAfterViewInit() {
        console.log(this.tasks[0])
    }

    selectDay(day: number) {
        
        this.selectedDay = day;
        this.selectedTasks = this.tasks[day];
    }

    addTask() {
        const newTask = (document.querySelector("#task-input") as HTMLInputElement).value;
        const newHour = ((document.querySelector("#hour-input") as HTMLInputElement).value) as unknown as number;

        (this.tasks[this.selectedDay] as Array<[string, number]>).push([newTask, newHour]);
        console.log([newTask, newHour])
        console.log(this.selectedTasks)
    }

    removeTask(task: [string, number]) {
        console.log(task);
        (this.tasks[this.selectedDay] as Array<[string, number]>).forEach(
            (v, i) => {
                if (task == v) {
                    (this.tasks[this.selectedDay] as Array<[string, number]>).splice(i, 1);
                }
            }
        )
    }

    removeAllSelectedTasks() {
        this.selectedTasks = [];
        this.tasks[this.selectedDay] = []
    }
}
