import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aplicación Moderna');
  protected readonly subtitle = signal('Construida con Angular 21');
  
  protected readonly features = signal<Feature[]>([
    {
      icon: '🚀',
      title: 'Alto Rendimiento',
      description: 'Optimizado para velocidad y eficiencia con las últimas tecnologías'
    },
    {
      icon: '🎨',
      title: 'Diseño Moderno',
      description: 'Interfaz elegante y responsive con Tailwind CSS'
    },
    {
      icon: '⚡',
      title: 'Desarrollo Rápido',
      description: 'Estructura modular que acelera el desarrollo de nuevas funcionalidades'
    },
    {
      icon: '🔒',
      title: 'Seguro',
      description: 'Implementa las mejores prácticas de seguridad y protección de datos'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Perfecto en todos los dispositivos: móvil, tablet y escritorio'
    },
    {
      icon: '🌐',
      title: 'SSR Ready',
      description: 'Server-Side Rendering para mejor SEO y rendimiento inicial'
    }
  ]);

  protected readonly stats = signal<Stat[]>([
    { value: '99.9%', label: 'Uptime' },
    { value: '50ms', label: 'Response Time' },
    { value: '24/7', label: 'Support' },
    { value: '1M+', label: 'Users' }
  ]);

  protected readonly currentYear = new Date().getFullYear();
}
