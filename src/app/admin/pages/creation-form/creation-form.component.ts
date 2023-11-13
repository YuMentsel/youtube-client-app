import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss'],
})
export class CreationFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validateService: ValidateService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', Validators.maxLength(255)],
      image: ['', [Validators.required]],
      video: ['', [Validators.required]],
      date: ['', [Validators.required, this.validateService.dateValidator()]],
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get image() {
    return this.form.get('image');
  }

  get video() {
    return this.form.get('video');
  }

  get date() {
    return this.form.get('date');
  }

  submitForm() {
    localStorage.setItem('card', JSON.stringify(this.form.value));
    this.form.reset();
  }
}
