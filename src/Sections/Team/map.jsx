import React from "react";

import {
  northAmerica,
  southAmerica,
  europe,
  asia,
  africa,
  australia,
} from "./map_locations";

function Map() {
  const dot =
    "m 0,0 c 0,-2.945 -2.388,-5.333 -5.333,-5.333 -2.945,0 -5.333,2.388 -5.333,5.333 0,2.945 2.388,5.333 5.333,5.333 C -2.388,5.333 0,2.945 0,0";

  const northAmericaMap = northAmerica.map((d) => (
    <path
      key={"northamerica" + northAmerica.indexOf(d)}
      name="northamerica"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const southAmericaMap = southAmerica.map((d) => (
    <path
      key={"southamerica" + southAmerica.indexOf(d)}
      name="southamerica"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const europeMap = europe.map((d) => (
    <path
      key={"europe" + europe.indexOf(d)}
      name="europe"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const asiaMap = asia.map((d) => (
    <path
      key={"asia" + asia.indexOf(d)}
      name="asia"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const africaMap = africa.map((d) => (
    <path
      key={"africa" + africa.indexOf(d)}
      name="africa"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const australiaMap = australia.map((d) => (
    <path
      key={"australia" + australia.indexOf(d)}
      name="australia"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  var selectedContinent = "";

  function highlightContinent(id, color, force) {
    if (selectedContinent === "") {
      var dots = document.getElementsByName(id);

      for (const [index, value] of dots.entries()) {
        if (index) value.style.fill = color;
      }
    }
  }

  function selectContinent(id) {
    var oldId = selectedContinent;
    selectedContinent = id;

    highlightContinent(id, "#881103");
    highlightContinent(oldId, "white");

    presentPanel(id);
  }

  function presentPanel(id) {
    var panel = document.getElementById(id + "Panel");
    panel.getElementsByTagName("button")[0].onclick = function () {
      hidePanel(id, panel);
    };

    panel.style.visibility = "visible";
    window.setTimeout(function () {
      panel.style.opacity = "1";
    }, 500);
  }

  function hidePanel(id, panel) {
    panel.style.opacity = "0";
    window.setTimeout(function () {
      panel.style.visibility = "hidden";
    }, 500);

    var dots = document.getElementsByName(id);
    for (const [index, value] of dots.entries()) {
      value.style.transitionDelay = "0s";
      value.style.fill = "white";
    }
    selectedContinent = "";
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1050"
      height="626.25"
    >
      <g fill="white" id="teamMap">
        <g
          id={"northamerica"}
          onMouseEnter={(e) =>
            highlightContinent(e.currentTarget.id, "#881103")
          }
          onMouseLeave={(e) => highlightContinent(e.currentTarget.id, "white")}
          onClick={(e) => selectContinent(e.currentTarget.id)}
        >
          {northAmericaMap}
        </g>

        <g id="southamerica">{southAmericaMap}</g>
        <g
          id="europe"
          onMouseEnter={(e) =>
            highlightContinent(e.currentTarget.id, "#881103")
          }
          onMouseLeave={(e) => highlightContinent(e.currentTarget.id, "white")}
          onClick={(e) => selectContinent(e.currentTarget.id)}
        >
          {europeMap}
        </g>
        <g
          id="asia"
          onMouseEnter={(e) =>
            highlightContinent(e.currentTarget.id, "#881103")
          }
          onMouseLeave={(e) => highlightContinent(e.currentTarget.id, "white")}
          onClick={(e) => selectContinent(e.currentTarget.id)}
        >
          {asiaMap}
        </g>
        <g
          id="africa"
          onMouseEnter={(e) =>
            highlightContinent(e.currentTarget.id, "#881103")
          }
          onMouseLeave={(e) => highlightContinent(e.currentTarget.id, "white")}
          onClick={(e) => selectContinent(e.currentTarget.id)}
        >
          {africaMap}
        </g>
        <g id="australia">{australiaMap}</g>
      </g>
    </svg>
  );
}

export default Map;
