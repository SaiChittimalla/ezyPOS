<template>
  <div>
    <v-navigation-drawer location="start" permanent>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" to="/HomePage/DashBoard" title="Dashboard"
          active-class="activet-class" value="Dashboard">
        </v-list-item>
        <v-list-item prepend-icon="mdi-tray-arrow-up" to="/HomePage/UploadPage" title="Uploads"
          active-class="activet-class" value="Uploads"></v-list-item>
        <v-list-item prepend-icon="mdi-sale-outline" to="/HomePage/DiscountReport" title="Discount Reports"
          active-class="activet-class" value="Discount Reports"></v-list-item>
        <v-list-item prepend-icon="mdi-bag-personal-outline" title="OC-ENT Report" to="/HomePage/OcEnt"
          active-class="activet-class" value="OC-ENT Report"></v-list-item>
        <v-list-item prepend-icon="mdi-diameter-variant" title="E charts" to="/HomePage/ECharts"
          active-class="activet-class" value="Void Reports"></v-list-item>
        <v-list-item prepend-icon="mdi-check-circle-outline" title="Apex Charts" to="/HomePage/ApexCharts"
          active-class="activet-class" value="Apex Charts"></v-list-item>
        <v-list-item prepend-icon="mdi-check-circle-outline" title="G charts" to="/HomePage/GCharts"
          active-class="activet-class" value="G charts"></v-list-item>
        <v-divider></v-divider>
        <v-list-item class="setting-padding">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                Settings
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list>
                  <v-list-item class="Accord-item my-1" prepend-icon="mdi mdi-cog" title="Print Settinngs"
                    to="/SettingPage/PrintSetting" active-class="activet-class" value="Print Settinngs"></v-list-item>
                  <v-list-item class="Accord-item my-1" prepend-icon="mdi-domain" title="Outlets"
                    to="/SettingPage/OutletPage" active-class="activet-class" value="Outlets"></v-list-item>
                  <v-list-item class="Accord-item my-1" prepend-icon="mdi-printer-outline" active-class="activet-class"
                    title="Pos Printer" value="Pos Printer"></v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    panel: [0],
  }),
};
</script>
