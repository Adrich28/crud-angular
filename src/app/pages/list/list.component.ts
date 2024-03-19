import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateService } from '../../services/create.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private readonly createService = inject(CreateService);

  projects$ = this.createService.getProjects();

  deleteProject(id : string) {
    this.createService.deleteProject(id);
  }
}
