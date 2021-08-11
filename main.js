function Login()
{
    player_1name = document.getElementById("input1").value;
    player_2name = document.getElementById("input2").value;

    localStorage.setItem("player1_name", player_1name);
    localStorage.setItem("player2_name", player_2name);

    window.location = "game.html";
}