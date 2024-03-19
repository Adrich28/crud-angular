import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.interface';
import { CreateService } from '../../services/create.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'] // Corrige 'styleUrl' a 'styleUrls'
})
export class EditComponent implements OnInit {
  private readonly createService = inject(CreateService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router); // Inyecta Router para redireccionar tras guardar los cambios

  form = new FormGroup({
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    author: new FormControl('', { validators: Validators.required, nonNullable: true }),
    technology: new FormControl('', { validators: Validators.required, nonNullable: true }),
  });

  ngOnInit(): void {
    this.loadProjectData();
  }

  loadProjectData() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.createService.getProject(projectId).subscribe((project: Project) => {
        if (project) { // Asegúrate de que el proyecto exista antes de intentar cargar los datos en el formulario
          this.form.setValue({
            name: project.name,
            author: project.author,
            technology: project.technology
          });
        }
      });
    }
  }

  saveProject() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId && this.form.valid) {
      // Crea un objeto de proyecto sin el id para la actualización
      const projectUpdate = {
        name: this.form.value.name,
        author: this.form.value.author,
        technology: this.form.value.technology,
      };
  
      this.createService.updateProject(projectId, projectUpdate).subscribe({
        next: () => {
          console.log('Proyecto actualizado con éxito');
          this.router.navigate(['/list']);
          // Aquí puedes redireccionar o mostrar un mensaje de éxito
        },
        error: (error) => console.error('Error al actualizar el proyecto', error),
      });
    }
  }
  
}
