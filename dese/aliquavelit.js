// Assuming the selected zone is updated in the state
componentDidUpdate(prevProps) {
  if (this.props.selectedZone !== prevProps.selectedZone) {
    // Update the map's view based on the selected zone
    const zoneCoordinates = this.getZoneCoordinates(this.props.selectedZone);
    map.setView(zoneCoordinates, 10); // Assuming 10 is the desired zoom level
  }
}
