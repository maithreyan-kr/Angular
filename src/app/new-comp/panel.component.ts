import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-comp',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class NewCourseFormComponent {
  form = new FormGroup({
    topics : new FormArray([])
  });
  
  addTopic(topic : HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}