import * as microsoftTeams from "@microsoft/teams-js";

export function init() {
    microsoftTeams.initialize(window);
}

export function getUsername() {
    microsoftTeams.getContext((context, error) => {
        return Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
    });
}