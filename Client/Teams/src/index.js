import * as microsoftTeams from "@microsoft/teams-js";

export function initializeTeamsSdk() {
    alert("Hello from JavaScript!");

    // Initialize Teams Client SDK
    microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
        alert(context.userPrincipalName);
    });
}

export function getUsername() {
    alert("Hello from JavaScript again!");

    // Get user email
    microsoftTeams.getContext((context) => {
        return context.userPrincipalName;
    });
}