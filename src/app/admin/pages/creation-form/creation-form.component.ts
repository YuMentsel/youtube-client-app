import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { Item } from '../../../youtube/models/search-item.model';
import { ValidateService } from '../../services/validate.service';
import { AdminFormErrorMessages } from '../../../constants/enums';
import { createCustomItem } from '../../../redux/actions/youtube.action';

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
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', Validators.maxLength(255)],
      image: ['', [Validators.required]],
      video: ['', [Validators.required]],
      date: ['', [Validators.required, this.validateService.dateValidator()]],
      tags: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    });
  }

  getTitleErrorMessage() {
    const title = this.form.get('title');
    if (title?.errors?.['required']) return AdminFormErrorMessages.title;
    if (title?.errors?.['minlength']) return AdminFormErrorMessages.titleMin;
    return title?.errors?.['maxlength'] ? AdminFormErrorMessages.titleMax : '';
  }

  getDescriptionErrorMessage() {
    const description = this.form.get('description');
    return description?.errors?.['maxlength'] ? AdminFormErrorMessages.descriptionMax : '';
  }

  getImageErrorMessage() {
    const image = this.form.get('image');
    return image?.errors?.['required'] ? AdminFormErrorMessages.image : '';
  }

  getVideoErrorMessage() {
    const video = this.form.get('video');
    return video?.errors?.['required'] ? AdminFormErrorMessages.video : '';
  }

  getDateErrorMessage() {
    const date = this.form.get('date');
    if (date?.errors?.['required']) return AdminFormErrorMessages.date;
    return date?.errors?.['notValid'] ? AdminFormErrorMessages.dateValid : '';
  }

  getTagErrorMessage() {
    return AdminFormErrorMessages.tags;
  }

  get tags() {
    return this.form.controls['tags'] as FormArray;
  }

  addTag() {
    this.tags.push(this.formBuilder.control('', Validators.required));
  }

  submitForm() {
    localStorage.setItem('card', JSON.stringify(this.form.value));
    this.store.dispatch(createCustomItem({ customItem: this.createCustomItem() }));
    this.resetForm();
  }

  createCustomItem(): Item<string> {
    const { title, description, image, video, date } = this.form.value;
    const id = nanoid(11);
    const viewCount = Math.floor(Math.random() * 10000);

    return {
      videoLink: video,
      id,
      snippet: {
        publishedAt: date,
        title,
        description,
        thumbnails: {
          medium: { url: image },
        },
      },
      statistics: {
        viewCount: viewCount.toString(),
        likeCount: Math.floor(viewCount / 5).toString(),
        commentCount: Math.floor(viewCount / 12).toString(),
      },
    };
  }

  resetForm() {
    this.form.reset();
    this.tags.clear();
    this.addTag();
  }
}
