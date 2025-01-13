export class Category {
  category_id?: number;
  name: string;
  description?: string;
  is_active: boolean;
  created_at?: string;

  constructor(data: {
    category_id?: number;
    name: string;
    description?: string;
    is_active: boolean;
    created_at?: string;
  }) {
    this.category_id = data.category_id;
    this.name = data.name;
    this.description = data.description;
    this.is_active = data.is_active;
    this.created_at = data.created_at;
  }
}
