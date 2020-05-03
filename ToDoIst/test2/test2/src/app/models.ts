export class Category {
  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

export class Priority {
  id: number;
  title: string;
  color: string;

  constructor(id: number, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export class Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: Priority;
  category?: Category;
  date?: Date;

  constructor(id: number, title: string, completed: boolean, priority?: Priority, category?: Category, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}

