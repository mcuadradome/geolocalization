import { Circle } from '../model/punto.interface';

export class Utils {
  getRandomWeight(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  metrosAKilometros(metros: number): number {
    return metros * 1000;
  }

  parseActualDateTime(hour: string): string {
    const fechaHoraActual = new Date();

    // Obtener las partes de la fecha
    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1; // Recuerda sumar 1 al mes
    const anio = fechaHoraActual.getFullYear();

    // Obtener las partes de la hora
    //const horas = fechaHoraActual.getHours();
    //const minutos = fechaHoraActual.getMinutes();
    const segundos = fechaHoraActual.getSeconds();

    const segundosFormateados =
      segundos < 10 ? `0${segundos}` : segundos.toString();

    // Formatear la fecha y la hora como una cadena de texto en el formato deseado
    return `${dia}/${mes}/${anio} ${hour}:${segundosFormateados}`;
  }

  parseActualTime(): string {
    const fechaHoraActual = new Date();

    // Obtener las partes de la hora
    const horas = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();

    const horasFormateadas = horas < 10 ? `0${horas}` : horas.toString();
    const minutosFormateados =
      minutos < 10 ? `0${minutos}` : minutos.toString();

    console.log(minutos);

    // Formatear la fecha y la hora como una cadena de texto en el formato deseado
    return `${horasFormateadas}:${minutosFormateados}`;
  }

  getMinutes(dateStart: string, dateEnd: string): number {
    const fechaInicio = new Date(this.parseStringToDate(dateStart));
    const fechaFin = new Date(this.parseStringToDate(dateEnd));

    console.log(fechaInicio, fechaFin);

    // Calcular la diferencia en milisegundos entre las dos fechas
    const diferenciaEnMilisegundos = fechaFin.getTime() - fechaInicio.getTime();

    if (!isNaN(diferenciaEnMilisegundos)) {
      // Calcular la diferencia en minutos
      const diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);
      return diferenciaEnMinutos;
    } else {
      return 0;
    }
  }

  parseStringToDate(date: string): Date {
    const fechaHoraString = '24/10/2023 20:10:24';
    const [fechaParte, horaParte] = fechaHoraString.split(' '); // Separar la fecha y la hora

    const [dia, mes, anio] = fechaParte.split('/'); // Separar día, mes y año
    const [hora, minutos, segundos] = horaParte.split(':'); // Separar hora, minutos y segundos

    // Crear el objeto Date con las partes de la fecha y la hora
    const fechaHora = new Date(
      Number(anio),
      Number(mes) - 1,
      Number(dia),
      Number(hora),
      Number(minutos),
      Number(segundos)
    );

    console.log(fechaHora);
    return fechaHora;
  }

  formatDate(fechaHoraString: string): string {
    // Cadena de fecha y hora en el formato "dd/MM/aaaa hh:mm:ss"

    // Dividir la cadena en partes de fecha y hora
    const [fechaParte, horaParte] = fechaHoraString.split(' ');

    // Dividir la parte de fecha en día, mes y año
    const [dia, mes, anio] = fechaParte.split('/');

    // Dividir la parte de hora en horas, minutos y segundos
    const [hora, minutos, segundos] = horaParte.split(':');

    // Crear un nuevo objeto Date con las partes de la fecha y la hora
    const fechaHora = new Date(
      Number(anio),
      Number(mes) - 1,
      Number(dia),
      Number(hora),
      Number(minutos),
      Number(segundos)
    );

    // Formatear la fecha en el formato deseado "yyyy-MM-dd'T'HH:mm:ss.SSS"
    const fechaFormateada = fechaHora.toISOString();

    console.log(fechaFormateada);
    return fechaFormateada;
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
