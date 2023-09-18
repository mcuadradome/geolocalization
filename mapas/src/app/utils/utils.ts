import { Circle } from "../model/punto.interface";

export class Utils{


  getRandomWeight(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  metrosAKilometros(metros: number): number {
    return metros * 1000;
  }

  // findIntersection(circles: Circle[]): [number, number] | null {
  //   if (circles.length !== 3) {
  //     return null; // Se requieren exactamente 3 círculos para encontrar la intersección
  //   }

  //   const [circle1, circle2, circle3] = circles;

  //   const d12 = Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
  //   const d13 = Math.sqrt(Math.pow(circle3.x - circle1.x, 2) + Math.pow(circle3.y - circle1.y, 2));
  //   const d23 = Math.sqrt(Math.pow(circle3.x - circle2.x, 2) + Math.pow(circle3.y - circle2.y, 2));

  //   if (d12 + d13 <= circle1.radius + circle2.radius) {
  //     return [circle1.x, circle1.y];
  //   }

  //   if (d12 + d23 <= circle2.radius + circle1.radius) {
  //     return [circle2.x, circle2.y];
  //   }

  //   if (d13 + d23 <= circle3.radius + circle1.radius) {
  //     return [circle3.x, circle3.y];
  //   }

  //   const p1 = circle1.x;
  //   const p2 = circle1.y;
  //   const p3 = circle2.x;
  //   const p4 = circle2.y;
  //   const p5 = circle3.x;
  //   const p6 = circle3.y;
  //   const r1 = circle1.radius;
  //   const r2 = circle2.radius;
  //   const r3 = circle3.radius;

  //   const A = 2 * (p3 - p1);
  //   const B = 2 * (p4 - p2);
  //   const C = r1 * r1 - r2 * r2 - p1 * p1 + p3 * p1 - p2 * p2 + p4 * p2;
  //   const D = 2 * (p5 - p1);
  //   const E = 2 * (p6 - p2);
  //   const F = r1 * r1 - r3 * r3 - p1 * p1 + p5 * p1 - p2 * p2 + p6 * p2;

  //   const x = (C * E - F * B) / (E * A - B * D);
  //   const y = (C * D - F * A) / (B * D - A * E);

  //   return [x, y];
  // }

}
