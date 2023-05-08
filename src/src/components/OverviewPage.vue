<script>
export default {
  name: "OverviewPage",
  data() {
    return {"skills":[{"active":true,"name":"GetTime","description":"-","version":"1.0"},{"active":true,"name":"GetWeather","description":"Ein sehr einfacher Skill, der auf die Wetterdaten von openweathermap.org zugreift.\nFür die Nutzung benötigt man einen API-Key.","version":"1.0"},{"active":true,"name":"HelloWorld","description":"Das ist ein ganz klassisches HelloWorld-Programm.\nBenutzte einen der unteren Sätze um es auszuprobieren.","version":"3.0"},{"active":true,"name":"Zigbee2MQTT","description":"Ein einfacher Smarthome Skill, mit dem man auf Zigbee2MQTT zugreifen kann.","version":"2.0"}]}
  }
};
</script>

<template>
  <div>
    <h1>Übersicht</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Beschreibung</th>
        <th>Version</th>
        <th>Aktiviert</th>
      </tr>
      <tr v-for="skill in skills">
        <td><RouterLink :to='"skill/" + skill["name"]'>{{skill["name"]}}</RouterLink></td>
        <td>{{skill["description"]}}</td>
        <td>{{skill["version"]}}</td>
        <td>{{skill["active"]}}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>