import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../models/project.interface';
import { CreateService } from '../../services/create.service';

@Component({
  selector: 'app-creator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creator.component.html',
  styleUrl: './creator.component.scss'
})
export class CreatorComponent {
  private readonly createService = inject(CreateService);

  form = new FormGroup({
    name: new FormControl("", {nonNullable : true}),
    author: new FormControl("", {nonNullable : true}),
    technology: new FormControl("", {nonNullable : true}),
  })
  saveProject() {
    this.createService.addProject(this.form.value as Project);
  }
}
