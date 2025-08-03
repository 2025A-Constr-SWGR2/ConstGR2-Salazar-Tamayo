import { Controller, Get, Query } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {
  constructor(private readonly calculadoraService: CalculadoraService) {}

  @Get('suma')
  suma(@Query('a') a: string, @Query('b') b: string) {
    return this.calculadoraService.suma(Number(a), Number(b));
  }

  @Get('resta')
  resta(@Query('a') a: string, @Query('b') b: string) {
    return this.calculadoraService.resta(Number(a), Number(b));
  }

  @Get('multiplicacion')
  multiplicacion(@Query('a') a: string, @Query('b') b: string) {
    return this.calculadoraService.multiplicacion(Number(a), Number(b));
  }

  @Get('division')
  division(@Query('a') a: string, @Query('b') b: string) {
    return this.calculadoraService.division(Number(a), Number(b));
  }

  @Get('todas')
  todasLasOperaciones(@Query('a') a: string, @Query('b') b: string) {
    const numA = Number(a);
    const numB = Number(b);
    
    return {
      suma: this.calculadoraService.suma(numA, numB),
      resta: this.calculadoraService.resta(numA, numB),
      multiplicacion: this.calculadoraService.multiplicacion(numA, numB),
      division: this.calculadoraService.division(numA, numB)
    };
  }
} 