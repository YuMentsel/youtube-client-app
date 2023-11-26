import { nanoid } from 'nanoid';
import { customKind } from '../../constants/constants';
import { FormValue } from './form-value.model';

export class CustomItem {
  videoLink: string;

  id: string;

  kind: string;

  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: { url: string };
    };
  };

  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };

  constructor(formValue: FormValue) {
    const { title, description, image, video, date } = formValue;
    const id = nanoid(11);
    const viewCount = Math.floor(Math.random() * 10000);

    this.videoLink = video;
    this.id = id;
    this.kind = customKind;
    this.snippet = {
      publishedAt: date,
      title,
      description,
      thumbnails: {
        medium: { url: image },
      },
    };
    this.statistics = {
      viewCount: viewCount.toString(),
      likeCount: Math.floor(viewCount / 5).toString(),
      commentCount: Math.floor(viewCount / 12).toString(),
    };
  }
}
