export class City {
  city_id?: number;
  country_id: number; //fk
  name: string;
  is_active: boolean;
  created_at?: string;

  constructor(data: {
    city_id?: number;
    country_id: number;
    name: string;
    is_active: boolean;
    created_at?: string;
  }) {
    this.city_id = data.city_id;
    this.country_id = data.country_id;
    this.name = data.name;
    this.is_active = data.is_active;
    this.created_at = data.created_at;
  }
}
