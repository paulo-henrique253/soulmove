import { useState } from 'react';

function CalculadoraCarbono() {
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularEmissao(e: React.FormEvent) {
    e.preventDefault();

    const emissao = Number(km) * 0.2;
    setResultado(`${emissao.toFixed(1)}kg emitidos`);
  }

  return (
    <div className="space-y-8">
      <form onSubmit={calcularEmissao} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="number"
          min={0}
          placeholder="Insira uma quilometragem"
          value={km}
          onChange={(e) => setKm(e.target.value)}
          className="flex-1 px-6 py-4 rounded-xl bg-linear-to-r from-sky-300 to-indigo-200  text-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-linear-to-r from-indigo-500 to-sky-400  text-white font-bold rounded-xl"
        >
          Enviar
        </button>
      </form>

      {resultado && (
        <div className="font-['Lexend_Deca'] flex items-center justify-center gap-3 text-2xl font-bold text-indigo-600">
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default CalculadoraCarbono;