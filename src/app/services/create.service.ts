import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, setDoc, docData } from '@angular/fire/firestore';
import { Project } from '../models/project.interface';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private firestore = inject(Firestore);
  private projectCollection = collection(this.firestore, "projects");

  addProject(project: Project) {
    return from(addDoc(this.projectCollection, project)); // Retorna un Observable.
  }

  getProjects(): Observable<Project[]> {
    return collectionData(this.projectCollection, { idField: 'id' }) as Observable<Project[]>;
  }

  // Método corregido para obtener un proyecto por ID.
  getProject(id: string): Observable<Project> {
    const docRef = doc(this.firestore, "projects", id);
    return docData(docRef, { idField: 'id' }) as Observable<Project>;
  }

  updateProject(id: string, project: Partial<Project>) {
    const docRef = doc(this.firestore, "projects", id);
    return from(setDoc(docRef, project)); // Usa setDoc para actualizar.
  }

  deleteProject(id: string) {
    const docRef = doc(this.firestore, "projects", id);
    return from(deleteDoc(docRef)); // Retorna un Observable.
  }
}
