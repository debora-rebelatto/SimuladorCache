import React from 'react';
import testdata from "../../data/testdata.json";
const MainMemory = () => {

  const [memory, setMemory] = React.useState([]);
  const [memorySize, setMemorySize] = React.useState(0);
  const [memoryAddress, setMemoryAddress] = React.useState(0);
  const [memoryValue, setMemoryValue] = React.useState(0);
  const [memoryValueType, setMemoryValueType] = React.useState('byte');
  const [memoryValueTypeOptions, setMemoryValueTypeOptions] = React.useState(['byte', 'word', 'dword']);
  const [memoryValueTypeOptionsDisabled, setMemoryValueTypeOptionsDisabled] = React.useState(false);


  const buildMemory = () => {

		let qtd_linhas_ram = testdata.numero_celulas_MP / testdata.qtd_celulas_bloco_MP;
    return Array.from({ length: qtd_linhas_ram }, (v, k) => k);
    // for (let i = 0; i < qtd_linhas_ram; i++) {
    //   mp += '<tr>';
    //   mp += '<td class="endereco bg-primary" endereco="' + (dec_to_bho(i * 4, 'B')).padStart(7, '0') + '">' + (dec_to_bho(i * 4, 'B')).padStart(7, '0') + '</td>';
    //   mp += '<td>' + (dec_to_bho(array_MP[i][0], 'B')).padStart(8, '0') + '</td>';
    //   mp += '<td>' + (dec_to_bho(array_MP[i][1], 'B')).padStart(8, '0') + '</td>';
    //   mp += '<td>' + (dec_to_bho(array_MP[i][2], 'B')).padStart(8, '0') + '</td>';
    //   mp += '<td>' + (dec_to_bho(array_MP[i][3], 'B')).padStart(8, '0') + '</td>';
    //   mp += '</tr>';
    // }
  }

  return (
    <div>
      <h1>Main Memory</h1>

      <table id="mp">
        <thead>
          <td>Endereço</td>
          <td>C0</td>
          <td>C1</td>
          <td>C2</td>
          <td>C3</td>
        </thead>
        <tbody>
          {buildMemory()}
        </tbody>
      </table>
    </div>
  );
}

export default MainMemory;