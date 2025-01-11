export class Country {
  country_id?: number;
  name: string;
  is_active: boolean;
  country_code: string;
  phone_code: string;
  created_at?: string;

  constructor(data: {
    country_id?: number;
    name: string;
    is_active: boolean;
    country_code: string;
    phone_code: string;
    created_at?: string;
  }) {
    this.country_id = data.country_id;
    this.name = data.name;
    this.is_active = data.is_active;
    this.country_code = data.country_code;
    this.phone_code = data.phone_code;
    this.created_at = data.created_at;
  }
}
