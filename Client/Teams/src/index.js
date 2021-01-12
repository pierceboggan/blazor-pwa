import * as microsoftTeams from "@microsoft/teams-js";

export function init() {
    alert("hi");
    microsoftTeams.initialize(window);
    alert("hi again");
}

export function getUsername() {
    alert("hi2");
    microsoftTeams.getContext((context, error) => {
        alert(Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "");
        return Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
    });
}