import * as microsoftTeams from "https://statics.teams.microsoft.com/sdk/v1.5.2/js/MicrosoftTeams.min.js";

window.initializeTeamsSdk = () => {
    alert("hi");
    microsoftTeams.initialize(window);
    alert("hi again");
}

window.getUsername = () => {
    alert("hi2");
    microsoftTeams.getContext((context, error) => {
        alert(Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "");
        return Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
    });
}