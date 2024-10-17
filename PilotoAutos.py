import pandas as pd
import numpy as np

# Función para calcular la distancia entre dos puntos geográficos usando la fórmula de Haversine
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # Radio de la Tierra en km
    lat1_rad = np.radians(lat1)
    lon1_rad = np.radians(lon1)
    lat2_rad = np.radians(lat2)
    lon2_rad = np.radians(lon2)

    dlat = lat2_rad - lat1_rad
    dlon = lon2_rad - lon1_rad

    a = np.sin(dlat / 2)**2 + np.cos(lat1_rad) * np.cos(lat2_rad) * np.sin(dlon / 2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1 - a))

    return R * c  # Retorna la distancia en km

# Cargar el archivo Excel
df = pd.read_excel('TodosLosEdificios.xlsx')  # Reemplaza con el nombre de tu archivo

# Crear un DataFrame para las combinaciones
combinaciones = []

# Iterar sobre cada técnico
for tecnico in df['Nombre del Tecnico'].unique():
    tecnico_info = df[df['Nombre del Tecnico'] == tecnico]
    
    # Obtener la ciudad base del técnico
    ciudad_base = tecnico_info[tecnico_info['Ciudad Base'] == 'SI']
    
    if not ciudad_base.empty:
        base_lat = ciudad_base['Latitud'].values[0]
        base_lon = ciudad_base['Longitud'].values[0]

        # Listar edificios del técnico
        edificios_tecnico = tecnico_info[['Edificio', 'Latitud', 'Longitud']]

        # Hacer combinaciones de los edificios
        for i in range(len(edificios_tecnico)):
            for j in range(i + 1, len(edificios_tecnico)):
                edificio1 = edificios_tecnico.iloc[i]
                edificio2 = edificios_tecnico.iloc[j]
                
                # Calcular la distancia desde la ciudad base hasta ambos edificios
                distancia_ida = haversine(base_lat, base_lon, edificio1['Latitud'], edificio1['Longitud']) + \
                                haversine(edificio1['Latitud'], edificio1['Longitud'], edificio2['Latitud'], edificio2['Longitud']) + \
                                haversine(edificio2['Latitud'], edificio2['Longitud'], base_lat, base_lon)
                
                # Agregar la combinación a la lista
                combinaciones.append((tecnico, 
                                      edificio1['Edificio'], edificio1['Latitud'], edificio1['Longitud'], 
                                      edificio2['Edificio'], edificio2['Latitud'], edificio2['Longitud'], 
                                      distancia_ida))

# Crear un DataFrame con las combinaciones y distancias
combinaciones_df = pd.DataFrame(combinaciones, columns=['Técnico', 
                                                        'Edificio 1', 'Latitud 1', 'Longitud 1', 
                                                        'Edificio 2', 'Latitud 2', 'Longitud 2', 
                                                        'Distancia Total (km)'])

# Calcular el total de kilómetros recorridos
total_km = combinaciones_df['Distancia Total (km)'].sum()

# Guardar los resultados en el archivo HTML existente
with open('resultados.html', 'w', encoding='utf-8') as f:
    # Cabecera HTML
    f.write("""
    <html>
    <head>
        <title>Resultados de Combinaciones de Edificios</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            #filter { margin-bottom: 20px; }
        </style>
        <script>
            function filtrarTecnico() {
                var tecnicoSeleccionado = document.getElementById('tecnicoSelect').value;
                var rows = document.querySelectorAll('table tbody tr');
                var totalKm = 0;
                var totalCombinaciones = 0;

                rows.forEach(function(row) {
                    var tecnico = row.cells[0].innerText;
                    if (tecnicoSeleccionado === 'todos' || tecnico === tecnicoSeleccionado) {
                        row.style.display = '';
                        totalKm += parseFloat(row.cells[7].innerText);
                        totalCombinaciones++;
                    } else {
                        row.style.display = 'none';
                    }
                });

                document.getElementById('totalKm').innerText = totalKm.toLocaleString() + ' km';
                document.getElementById('totalCombinaciones').innerText = totalCombinaciones.toLocaleString();
            }
        </script>
    </head>
    <body>
        <h1>Resultados de Combinaciones de Edificios</h1>
        <label for="tecnicoSelect">Seleccionar Técnico:</label>
        <select id="tecnicoSelect" onchange="filtrarTecnico()">
            <option value="todos">Todos</option>
    """)

    # Opciones de técnicos en el filtro
    for tecnico in df['Nombre del Tecnico'].unique():
        f.write(f'<option value="{tecnico}">{tecnico}</option>')

    f.write(f"""
        </select>
        <h3>Total de Kilómetros: <span id="totalKm">{total_km:,.0f} km</span></h3>
        <h3>Total de Combinaciones: <span id="totalCombinaciones">{len(combinaciones_df):,}</span></h3>
        <table>
            <thead>
                <tr>
                    <th>Técnico</th>
                    <th>Edificio 1</th>
                    <th>Latitud 1</th>
                    <th>Longitud 1</th>
                    <th>Edificio 2</th>
                    <th>Latitud 2</th>
                    <th>Longitud 2</th>
                    <th>Distancia Total (km)</th>
                </tr>
            </thead>
            <tbody>
    """)

    # Filtrar resultados y agregar filas a la tabla
    for index, row in combinaciones_df.iterrows():
        f.write(f"""
            <tr>
                <td>{row['Técnico']}</td>
                <td>{row['Edificio 1']}</td>
                <td>{row['Latitud 1']}</td>
                <td>{row['Longitud 1']}</td>
                <td>{row['Edificio 2']}</td>
                <td>{row['Latitud 2']}</td>
                <td>{row['Longitud 2']}</td>
                <td>{row['Distancia Total (km)']:.0f}</td>
            </tr>
        """)

    f.write("""
            </tbody>
        </table>
    </body>
    </html>
    """)

print("El archivo 'resultados.html' ha sido actualizado con las nuevas columnas de latitud y longitud.")
