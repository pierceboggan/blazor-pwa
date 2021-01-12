import * as microsoftTeams from "@microsoft/teams-js";

export function initializeTeamsSdk() {
    alert("hi");
    microsoftTeams.initialize();
    alert("hi again");
    microsoftTeams.getContext((context, error) => {
    alert(Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "");
    return Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
    });
    alert("hi again again");
}

export function getUsername() {
    alert("hi2");
    microsoftTeams.getContext((context, error) => {
        alert(Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "");
        return Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
    });
}