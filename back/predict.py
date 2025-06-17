import sys
import json
import joblib
import numpy as np

# Carrega o modelo
model = joblib.load('modelo_melhor.joblib')

def transformar_json(json_data):
    # Ajuste conforme o formato esperado pelo modelo
    campos = ['preg', 'plas', 'pres', 'skin', 'insu', 'mass', 'pedi', 'age']
    entrada = [float(json_data.get(c, 0)) for c in campos]
    return np.array([entrada])

if __name__ == '__main__':
    try:
        input_json = json.loads(sys.argv[1])
        X = transformar_json(input_json)
        pred = model.predict(X)
        saida = {'predicao': int(pred[0])}
        print(json.dumps(saida))
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)
