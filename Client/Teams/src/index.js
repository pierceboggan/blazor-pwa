import * as microsoftTeams from "@microsoft/teams-js";

export function initializeTeamsSdk() {
    alert("hi");
    microsoftTeams.initialize();
    alert("hi again");
    microsoftTeams.getContext((context) => {
        let userId = document.getElementById('user');
        alert(context.userPrincipalName);
    });
    alert("hi again again");
}

export function getUsername() {
    alert("hi2");
    microsoftTeams.getContext((context) => {
        let userId = document.getElementById('user');
        alert(context.userPrincipalName);
    });
}