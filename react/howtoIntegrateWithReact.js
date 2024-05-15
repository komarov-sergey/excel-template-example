export default function App() {
  const html = `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>SheetJS Table Export</title>
      </head>
      <body>
        <table>
          <tr>
            <td
              data-t="s"
              data-v="Возвращение автомобилей на ТО (свой) по месяцу контроля"
              id="sjs-B1"
            >
              Возвращение автомобилей на ТО (свой) по месяцу контроля
            </td>
            <td id="sjs-C1"></td>
            <td id="sjs-D1"></td>
            <td id="sjs-E1"></td>
            <td id="sjs-F1"></td>
            <td id="sjs-G1"></td>
            <td id="sjs-H1"></td>
            <td id="sjs-I1"></td>
            <td id="sjs-J1"></td>
            <td id="sjs-K1"></td>
            <td id="sjs-L1"></td>
            <td id="sjs-M1"></td>
            <td id="sjs-N1"></td>
            <td id="sjs-O1"></td>
          </tr>
          <tr>
            <td id="sjs-B2"></td>
            <td id="sjs-C2"></td>
            <td id="sjs-D2"></td>
            <td id="sjs-E2"></td>
            <td id="sjs-F2"></td>
            <td id="sjs-G2"></td>
            <td id="sjs-H2"></td>
            <td id="sjs-I2"></td>
            <td id="sjs-J2"></td>
            <td id="sjs-K2"></td>
            <td id="sjs-L2"></td>
            <td id="sjs-M2"></td>
            <td id="sjs-N2"></td>
            <td id="sjs-O2"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Параметры" id="sjs-B3">
              Параметры
            </td>
            <td id="sjs-C3"></td>
            <td id="sjs-D3"></td>
            <td id="sjs-E3"></td>
            <td id="sjs-F3"></td>
            <td id="sjs-G3"></td>
            <td id="sjs-H3"></td>
            <td id="sjs-I3"></td>
            <td id="sjs-J3"></td>
            <td id="sjs-K3"></td>
            <td id="sjs-L3"></td>
            <td id="sjs-M3"></td>
            <td id="sjs-N3"></td>
            <td id="sjs-O3"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Дилер" id="sjs-B4">
              Дилер
            </td>
            <td id="sjs-C4"></td>
            <td id="sjs-D4"></td>
            <td id="sjs-E4"></td>
            <td id="sjs-F4"></td>
            <td id="sjs-G4"></td>
            <td id="sjs-H4"></td>
            <td id="sjs-I4"></td>
            <td id="sjs-J4"></td>
            <td id="sjs-K4"></td>
            <td id="sjs-L4"></td>
            <td id="sjs-M4"></td>
            <td id="sjs-N4"></td>
            <td id="sjs-O4"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="май 2024" id="sjs-B5">
              май 2024
            </td>
            <td id="sjs-C5"></td>
            <td id="sjs-D5"></td>
            <td id="sjs-E5"></td>
            <td id="sjs-F5"></td>
            <td id="sjs-G5"></td>
            <td id="sjs-H5"></td>
            <td id="sjs-I5"></td>
            <td id="sjs-J5"></td>
            <td id="sjs-K5"></td>
            <td id="sjs-L5"></td>
            <td id="sjs-M5"></td>
            <td id="sjs-N5"></td>
            <td id="sjs-O5"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="1,2,3,4,5" id="sjs-B6">
              1,2,3,4,5
            </td>
            <td id="sjs-C6"></td>
            <td id="sjs-D6"></td>
            <td id="sjs-E6"></td>
            <td id="sjs-F6"></td>
            <td id="sjs-G6"></td>
            <td id="sjs-H6"></td>
            <td id="sjs-I6"></td>
            <td id="sjs-J6"></td>
            <td id="sjs-K6"></td>
            <td id="sjs-L6"></td>
            <td id="sjs-M6"></td>
            <td id="sjs-N6"></td>
            <td id="sjs-O6"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="3" id="sjs-B7">
              3
            </td>
            <td id="sjs-C7"></td>
            <td id="sjs-D7"></td>
            <td id="sjs-E7"></td>
            <td id="sjs-F7"></td>
            <td id="sjs-G7"></td>
            <td id="sjs-H7"></td>
            <td id="sjs-I7"></td>
            <td id="sjs-J7"></td>
            <td id="sjs-K7"></td>
            <td id="sjs-L7"></td>
            <td id="sjs-M7"></td>
            <td id="sjs-N7"></td>
            <td id="sjs-O7"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Юр. лицо, Физ. лицо" id="sjs-B8">
              Юр. лицо, Физ. лицо
            </td>
            <td id="sjs-C8"></td>
            <td id="sjs-D8"></td>
            <td id="sjs-E8"></td>
            <td id="sjs-F8"></td>
            <td id="sjs-G8"></td>
            <td id="sjs-H8"></td>
            <td id="sjs-I8"></td>
            <td id="sjs-J8"></td>
            <td id="sjs-K8"></td>
            <td id="sjs-L8"></td>
            <td id="sjs-M8"></td>
            <td id="sjs-N8"></td>
            <td id="sjs-O8"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Интеркар, Авалон" id="sjs-B9">
              Интеркар, Авалон
            </td>
            <td id="sjs-C9"></td>
            <td id="sjs-D9"></td>
            <td id="sjs-E9"></td>
            <td id="sjs-F9"></td>
            <td id="sjs-G9"></td>
            <td id="sjs-H9"></td>
            <td id="sjs-I9"></td>
            <td id="sjs-J9"></td>
            <td id="sjs-K9"></td>
            <td id="sjs-L9"></td>
            <td id="sjs-M9"></td>
            <td id="sjs-N9"></td>
            <td id="sjs-O9"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Авалон" id="sjs-B10">
              Авалон
            </td>
            <td id="sjs-C10"></td>
            <td id="sjs-D10"></td>
            <td id="sjs-E10"></td>
            <td id="sjs-F10"></td>
            <td id="sjs-G10"></td>
            <td id="sjs-H10"></td>
            <td id="sjs-I10"></td>
            <td id="sjs-J10"></td>
            <td id="sjs-K10"></td>
            <td id="sjs-L10"></td>
            <td id="sjs-M10"></td>
            <td id="sjs-N10"></td>
            <td id="sjs-O10"></td>
          </tr>
          <tr>
            <td data-t="s" data-v="Все семейства" id="sjs-B11">
              Все семейства
            </td>
            <td id="sjs-C11"></td>
            <td id="sjs-D11"></td>
            <td id="sjs-E11"></td>
            <td id="sjs-F11"></td>
            <td id="sjs-G11"></td>
            <td id="sjs-H11"></td>
            <td id="sjs-I11"></td>
            <td id="sjs-J11"></td>
            <td id="sjs-K11"></td>
            <td id="sjs-L11"></td>
            <td id="sjs-M11"></td>
            <td id="sjs-N11"></td>
            <td id="sjs-O11"></td>
          </tr>
          <tr>
            <td id="sjs-B12"></td>
            <td id="sjs-C12"></td>
            <td id="sjs-D12"></td>
            <td id="sjs-E12"></td>
            <td id="sjs-F12"></td>
            <td id="sjs-G12"></td>
            <td id="sjs-H12"></td>
            <td id="sjs-I12"></td>
            <td id="sjs-J12"></td>
            <td id="sjs-K12"></td>
            <td id="sjs-L12"></td>
            <td id="sjs-M12"></td>
            <td id="sjs-N12"></td>
            <td id="sjs-O12"></td>
          </tr>
          <tr>
            <td rowspan="2" data-t="s" data-v="№ п/п" id="sjs-B13">
              № п/п
            </td>
            <td
              rowspan="2"
              data-t="s"
              data-v="Наименование дилера"
              id="sjs-C13"
            >
              Наименование дилера
            </td>
            <td rowspan="2" data-t="s" data-v="Город" id="sjs-D13">
              Город
            </td>
            <td rowspan="2" data-t="s" data-v="Уникальный код" id="sjs-E13">
              Уникальный код
            </td>
            <td rowspan="2" data-t="s" data-v="ИНН" id="sjs-F13">
              ИНН
            </td>
            <td rowspan="2" data-t="s" data-v="BIR" id="sjs-G13">
              BIR
            </td>
            <td rowspan="2" data-t="s" data-v="Область" id="sjs-H13">
              Область
            </td>
            <td rowspan="2" data-t="s" data-v="ФО" id="sjs-I13">
              ФО
            </td>
            <td colspan="3" data-t="s" data-v="TO - 1" id="sjs-J13">
              TO - 1
            </td>
            <td colspan="3" data-t="s" data-v="TO - 2" id="sjs-M13">
              TO - 2
            </td>
          </tr>
          <tr>
            <td
              data-t="s"
              data-v="Количество а/м, приехавших на ТО"
              id="sjs-J14"
            >
              Количество а/м, приехавших на ТО
            </td>
            <td
              data-t="s"
              data-v="Количество а/м, приехавших на ТО"
              id="sjs-K14"
            >
              Количество а/м, приехавших на ТО
            </td>
            <td data-t="s" data-v="% возращения" id="sjs-L14">
              % возращения
            </td>
            <td
              data-t="s"
              data-v="Количество а/м, приехавших на ТО"
              id="sjs-M14"
            >
              Количество а/м, приехавших на ТО
            </td>
            <td
              data-t="s"
              data-v="Количество а/м, приехавших на ТО"
              id="sjs-N14"
            >
              Количество а/м, приехавших на ТО
            </td>
            <td data-t="s" data-v="% возращения" id="sjs-O14">
              % возращения
            </td>
          </tr>
          <tr>
            <td data-t="n" data-v="1" id="sjs-B15">
              1
            </td>
            <td data-t="s" data-v="Авалон" id="sjs-C15">
              Авалон
            </td>
            <td data-t="s" data-v="БЕЛГОРОД" id="sjs-D15">
              БЕЛГОРОД
            </td>
            <td data-t="s" data-v="48414200" id="sjs-E15">
              48414200
            </td>
            <td data-t="s" data-v="3123297340" id="sjs-F15">
              3123297340
            </td>
            <td data-t="s" data-v="64306895" id="sjs-G15">
              64306895
            </td>
            <td data-t="s" data-v="Белгородская обл." id="sjs-H15">
              Белгородская обл.
            </td>
            <td data-t="s" data-v="ЦФО" id="sjs-I15">
              ЦФО
            </td>
            <td data-t="n" data-v="1" id="sjs-J15">
              1
            </td>
            <td data-t="n" data-v="2" id="sjs-K15">
              2
            </td>
            <td data-t="n" data-v="3" id="sjs-L15">
              3
            </td>
            <td data-t="n" data-v="4" id="sjs-M15">
              4
            </td>
            <td data-t="n" data-v="5" id="sjs-N15">
              5
            </td>
            <td data-t="n" data-v="6" id="sjs-O15">
              6
            </td>
          </tr>
        </table>
      </body>
    </html>`;

  return (
    <>
      <button onClick={exportFile}>Export XLSX</button>
      <div ref={tbl} dangerouslySetInnerHTML={{ html }} />
    </>
  );
}
