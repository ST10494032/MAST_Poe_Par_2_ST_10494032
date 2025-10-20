export type Course = "Starters" | "Mains" | "Desserts" | "Drinks";

export interface MenuItem {
  dishName: string;
  description: string;
  course: Course;
  price: number;
}
