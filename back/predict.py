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

def transformar_args(args):
    # Espera argumentos na ordem: preg plas pres skin insu mass pedi age
    entrada = [float(arg) for arg in args]
    return np.array([entrada])

if __name__ == '__main__':
    try:
        if len(sys.argv) == 2:
            # Tenta carregar como JSON
            input_json = json.loads(sys.argv[1])
            X = transformar_json(input_json)
        elif len(sys.argv) == 9:
            # Recebe argumentos individuais
            X = transformar_args(sys.argv[1:])
        else:
            raise Exception('Forneça um JSON único ou 8 argumentos individuais.')
        pred = model.predict(X)
        saida = {'predicao': int(pred[0])}
        print(json.dumps(saida))
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)
