import { Component, input } from '@angular/core';
import { CsToolbarComponent } from '../../../../layouts/component-structures/cs-toolbar/cs-toolbar.component';
import { BsSpacerContainerComponent } from '../../../../layouts/base-structures/bs-spacer-container/bs-spacer-container.component';
import { CsTopicQuestionHeaderComponent } from '../../../../layouts/component-structures/cs-topic-question-header/cs-topic-question-header.component';
import { CsTopicQuestionsComponent } from '../../../../layouts/component-structures/cs-topic-questions/cs-topic-questions.component';

@Component({
  selector: 'app-questions-passwords',
  imports: [
    CsToolbarComponent,
    BsSpacerContainerComponent,
    CsTopicQuestionHeaderComponent,
    CsTopicQuestionsComponent,
  ],
  templateUrl: './questions-passwords.component.html',
  styleUrl: './questions-passwords.component.scss',
})
export class QuestionsPasswordsComponent {
  jsonId = input.required<string>();
}
