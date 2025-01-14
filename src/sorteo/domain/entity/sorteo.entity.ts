export class Sorteo {
  sorteo_id?: number;
  category_id: number; // fk
  name: string;
  description: string;
  is_active?: boolean;
  image: string[];
  start_date: string;
  end_date: string;
  total_tickets: number;
  created_at?: string;

  constructor(data: {
    sorteo_id?: number;
    category_id: number;
    name: string;
    description: string;
    is_active?: boolean;
    image: string[];
    start_date: string;
    end_date: string;
    total_tickets: number;
    created_at?: string;
  }) {
    this.sorteo_id = data.sorteo_id;
    this.category_id = data.category_id;
    this.name = data.name;
    this.description = data.description;
    this.is_active = data.is_active;
    this.image = data.image;
    this.start_date = data.start_date;
    this.end_date = data.end_date;
    this.total_tickets = data.total_tickets;
    this.created_at = data.created_at;
  }
}
