# Assets - Mutant Detector

Esta carpeta contiene los recursos estáticos de la aplicación, principalmente las imágenes utilizadas en el README.

## Imágenes requeridas:

1. **app-desktop.png** - Captura de la interfaz principal en desktop
   - Muestra el formulario completo, botones y área de resultados
   
2. **app-mobile.png** - Captura en dispositivo móvil 
   - Ejemplo de resultado "Humano confirmado" en layout móvil
   
3. **app-responsive.png** - Captura multi-dispositivo
   - Vista comparativa en iPhone, iPad y desktop
   
4. **app-error-validation.png** - Captura de error de validación
   - Muestra mensaje de error cuando se ingresan caracteres inválidos

## Cómo agregar las imágenes:

```bash
# Copiar las capturas de pantalla a esta carpeta
cp capturas/desktop.png src/assets/app-desktop.png
cp capturas/mobile.png src/assets/app-mobile.png  
cp capturas/responsive.png src/assets/app-responsive.png
cp capturas/error.png src/assets/app-error-validation.png
```

Las rutas están configuradas en el README.md con referencias relativas: `./src/assets/nombre-archivo.png`