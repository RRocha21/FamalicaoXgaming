var teams = {
    left: {},
    right: {}
}

var ticker_text = "ASDASDSDA";

var start_money = {};
var wl_teama = "";
var wl_teamb = "";

var map1 = "none"; // Map 1 Name
var map2 = "none"; // Map 2 Name
var map3 = "none"; // Map 3 Name
var map4 = "none"; // Map 4 Name
var map5 = "none"; // Map 5 Name
var map1_res1 = 0;
var map1_res2 = 0;
var map2_res1 = 0;
var map2_res2 = 0;
var map3_res1 = 0;
var map3_res2 = 0;
var swapsides = 0;
var match_type = "";
var pick = "DECIDER"; // Current map pick
var text_for_map = "DECIDER";

var playing = 2;

var bo = 3;

var flag_replays = 1;

var t_color = "110, 191,63";
var dark_t_color = "34, 101,54";
var ct_color = "130,175,204";
var dark_ct_color = "33, 78, 119";

var darker_ct_color = "33, 58, 89";
var darker_t_color = "34, 71, 34";

var warning = "229,57,67";

var bigger_sponsor_background = 0;
var flag_sponsor = false;
var myTimer;
var letters = 0;
var left_name_team = "";
var right_name_team = "";
/* -------------------------------- */
var count = 1;
let numtext = 0;
var txt = ["../../files/img/hud_elements/logo_prodigies.png", "../../files/img/hud_elements/logo_pew.png"];
var txt_sponsor = ["../../sponsors/sponsor.png", "../../sponsors/sponsor_2.png", "../../sponsors/sponsor_3.png"];
var count = 1;

var dead_utility = ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"];

var myTimer = setInterval(function() {
}, 1);

$(document).ready(
    function() {
        setInterval(function() {
            if (numtext >= 1) {
                numtext = 0;
            } else {
                numtext = numtext + 1;
            }
            $(".topbar_container > .topbar_i_logo > .background").fadeOut(function() {
                $(this).css("background-image", "url(" + txt[numtext] +")");

            }).fadeIn();

        }, 15000);
    });


let bottom_sponsor_number = 0;
var bottom_sponsors_array = []
for (var i = 0; i < 15; i++) {
    let bottom_link = loadBottomSponsors(i);
    if (bottom_link !== '1') {
        bottom_sponsors_array.push(bottom_link);
    }
}

let bottom_sponsor_length = bottom_sponsors_array.length;

if (bottom_sponsor_length !== 1) {
    $(document).ready(
        function() {
            setInterval(function() {
                if (bottom_sponsor_number >= bottom_sponsor_length - 1) {
                    bottom_sponsor_number = 0;
                } else {
                    bottom_sponsor_number = bottom_sponsor_number + 1;
                }
                $(".sponsor > .inner").fadeOut(function() {
                    $(this).css("background-image", "url(../../bottom_sponsors/"+bottom_sponsors_array[bottom_sponsor_number]+".png)");
                }).fadeIn();
            }, 10000);
        });
}

let left_sponsor_number = 0;
var left_sponsors_array = []
for (var i = 0; i < 15; i++) {
    let left_link = loadLeftSponsors(i);
    if (left_link !== '1') {
        left_sponsors_array.push(left_link);
    }
}

let left_sponsor_length = left_sponsors_array.length;

if (left_sponsor_length !== 1) {
    $(document).ready(
        function() {
            setInterval(function() {
                if (left_sponsor_number >= left_sponsor_length - 1) {
                    left_sponsor_number = 0;
                } else {
                    left_sponsor_number = left_sponsor_number + 1;
                }
                $(".side_left_sponsor > .inner").fadeOut(function() {
                    $(this).css("background-image", "url(../../left_sponsors/"+left_sponsors_array[left_sponsor_number]+".png)");
                }).fadeIn();
            }, 12000);
        });
}

let right_sponsor_number = 0;
var right_sponsors_array = []
for (var i = 0; i < 15; i++) {
    let right_link = loadRightSponsors(i);
    if (right_link !== '1') {
        right_sponsors_array.push(right_link);
    }
}

let right_sponsor_length = right_sponsors_array.length;

if (right_sponsor_length !== 1) {
    $(document).ready(
        function() {
            setInterval(function() {
                if (right_sponsor_number >= left_sponsor_length - 1) {
                    right_sponsor_number = 0;
                } else {
                    right_sponsor_number = right_sponsor_number + 1;
                }
                $(".side_right_sponsor > .inner").fadeOut(function() {
                    $(this).css("background-image", "url(../../right_sponsors/"+right_sponsors_array[right_sponsor_number]+".png)");
                }).fadeIn();
            }, 12000);
        });
}

let video_sponsor_number = 0;
var video_sponsors_array = [];
var videos_length = [];
for (var i = 0; i < 15; i++) {
    let arr = loadVideoSponsors(i);
    let video_link = arr[0];
    let video_duration = arr[1];
    if (video_link !== '1') {
        video_sponsors_array.push(video_link);
    }
    if (video_duration !== '1') {
        videos_length.push(video_duration);
    }
}

let video_sponsor_length = video_sponsors_array.length;
var bigger_sponsor_counter = Math.floor(Math.random() * video_sponsor_length);

/******************************** */

if (pick !== "") {
    if (pick == "DECIDER") {

    } else {
        var pick = pick + " PICK";
    }
}

if (map4 == "" && map5 == "") {

    if (playing == 1) {
        var maps = "<font color='#EB4802'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;" + map2 + "&nbsp;&nbsp;&nbsp;&nbsp;" + map3;
    } else if (playing == 2) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#EB4802'>" + map2 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;" + map3;
    } else if (playing == 3) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;&nbsp;&nbsp;<font color='#EB4802'>" + map3 + "</font>";
    }

}


if (!(map4 == "" && map5 == "")) {

    if (playing == 1) {
        var maps = "<font color='#EB4802'>" + map1 + "</font>&nbsp;&nbsp;" + map2 + "&nbsp;&nbsp;" + map3 + "&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 2) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map2 + "</font>&nbsp;&nbsp;" + map3 + "&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 3) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map3 + "</font>&nbsp;&nbsp;" + map4 + "&nbsp;&nbsp;" + map5;
    } else if (playing == 4) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map3 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map4 + "</font>&nbsp;&nbsp;" + map5;
    } else if (playing == 5) {
        var maps = "<font style='opacity: 0.3;'>" + map1 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map2 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map3 + "</font>&nbsp;&nbsp;<font style='opacity: 0.3;'>" + map4 + "</font>&nbsp;&nbsp;<font color='#EB4802'>" + map5 + "</font>";
    }

}

function fillObserved(player) {
    let statistics = player.getStats();
    let weapons = player.weapons;
    let right = false;
    let pslot;
    let sideactive;


    if (player.observer_slot >= 1 && player.observer_slot <= 5) {
        right = true;
    }
    let flag = player.country_code || (right ?
        (teams.left.flag || "") :
        (teams.right.flag || ""));

    if (right == true) {
        $("#obsplayer_logo").css("background-image", 'url("/teams/' + teams.left.logo + '")');
        $sideactive = "left";
    } else {
        $("#obsplayer_logo").css("background-image", 'url("/teams/' + teams.right.logo + '")');
        $sideactive = "right";
    }


    if (player.observer_slot >= 1 && player.observer_slot <= 5)
        pslot = player.observer_slot;
    else {
        pslot = player.observer_slot - 5;
    }

    let $playeractive = $(".players_" + $sideactive + "_container").find("#player" + pslot);

    $("#obsplayer_flag").css("background-image", "url('/files/img/flags/" + flag + ".png')")
    $(".observed_container>.k").html(statistics.kills);
    $(".observed_container>.d").html(statistics.deaths);


    $("#nades").html("NO UTILITY");


    if (statistics.helmet) {
        $(".observed_container>.flex_kd_observed>.helmet").css("display", "block");
    } else {
        $(".observed_container>.flex_kd_observed>.helmet").css("display", "none");
    }

    if (statistics.armor) {
        $(".observed_container>.flex_kd_observed>.armor").css("display", "block");
        if (statistics.helmet) {
            $(".observed_container>.flex_kd_observed>.armor").css("margin-right", "");
        } else {
            $(".observed_container>.flex_kd_observed>.armor").css("margin-right", "20px");
        }
    } else {
        $(".observed_container>.flex_kd_observed>.armor").css("display", "none");
    }

    $(".flex_kd_observed>.k").html(statistics.kills);
    $(".flex_kd_observed>.d").html(statistics.deaths);
    
    // if (statistics.round_kills) {
    //     $playeractive.find(".Round_Kills").css("outline", "2px solid rgb(236,236,236 )").css("transition", "all 0.5s ease 0s");
    //     $playeractive.find(".Round_Kills").css("transform", "translateX(2px)").css("transition", "all 0.5s ease 0s");
    // }

    $playeractive.find(".background").css("outline", "2px solid rgb(255,255,255 )").css("transition", "all 0.5s ease 0s");
    $playeractive.find(".background").css("box-shadow", "0px 0px 15px rgb(255,255,255 )").css("transition", "all 0.5s ease 0s");
    $playeractive.find(".diamond").css("box-shadow", "0px 0px 5px 5px rgb(255,255,255)");

    // $playeractive.find(".Round_Kills").css("box-shadow", "0px 0px 15px rgb(236,236,236 )").css("transition", "all 0.5s ease 0s");
    // $playeractive.css("transform", "translateY(-20px)").css("transition", "all 0.5s ease 0s");

    obs_player_name = player.name;

    if (player.team == "CT" && teams.left.side == "ct") {

        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) 0%,rgba(" + ct_color + ",1) 30%, rgba(" + ct_color + ",1) 50%, rgba(" + ct_color + ",1) 70% ,rgba(" + dark_ct_color + ",1) 100%)");


        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background"," linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) -30%, rgba(" + ct_color + ",1) 100%)");
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.defusekit ? $("<img width='21px' />").attr("src", "/files/img/elements/defuse.png") : "");

    } else if (player.team == "CT" && teams.right.side == "ct") {

        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 
        $(".observed_container>.line").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) 0%,rgba(" + ct_color + ",1) 30%, rgba(" + ct_color + ",1) 50%, rgba(" + ct_color + ",1) 70% ,rgba(" + dark_ct_color + ",1) 100%)");


        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) -30%, rgba(" + ct_color + ",1) 100%)");
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.defusekit ? $("<img width='21px' />").attr("src", "/files/img/elements/defuse.png") : "");

    } else if (player.team == "T" && teams.left.side == "t") {

        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) 0%,rgba(" + t_color + ",1) 30%, rgba(" + t_color + ",1) 50%, rgba(" + t_color + ",1) 70% ,rgba(" + dark_t_color + ",1) 100%)");

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) -30%, rgba(" + t_color + ",1) 100%)");
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.bomb ? $("<img width='21px' />").attr("src", "/files/img/elements/bomb.png") : "");

    } else if (player.team == "T" && teams.right.side == "t") {

        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            obs_player_name = obs_player_name.slice(letters);
        } 

        $(".observed_container>.line").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) 0%,rgba(" + t_color + ",1) 30%, rgba(" + t_color + ",1) 50%, rgba(" + t_color + ",1) 70% ,rgba(" + dark_t_color + ",1) 100%)");

        $(".observed_container>.health_bar>.health_bar_bg>.health_bar_sm").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) -30%, rgba(" + t_color + ",1) 100%)");
        $(".observed_container>.health_bar>.health_bar_bg").css("width", statistics.health + "%");

        $(".observed_container>.bomb_defuse").html(statistics.bomb ? $("<img width='21px' />").attr("src", "/files/img/elements/bomb.png") : "");

    }

    if (obs_player_name.length > 10) obs_player_name = obs_player_name.substring(0, 10);
    $(".observed_container>.name").html(obs_player_name);

    $("#nades").html("");

    for (let key in weapons) {
        let weapon = weapons[key];
        if (weapon.type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {
                $("#nades").append($("<img />").attr("src", "/files/img/grenades/" + weapon.name + ".png"));
            }
        }


        if (weapon.state == "active" || weapon.state == "reloading") {
            if (weapon.type == "Grenade" || weapon.type == "C4" || weapon.type == "Knife" || statistics.health == 0) {
                $(".observed_container>.ammo_bar>.ammo_txt").html("-/-");
                // $(".observed_container>.ammo_bar").css("opacity","0");
            } else {
                if(weapon.ammo_reserve == "undefined" || weapon.ammo_reserve == null){
                    // $(".observed_container>.ammo_bar").css("opacity","0");
                    $(".observed_container>.ammo_bar>.ammo_txt").html("-/-");
                } else {
                    $(".observed_container>.ammo_bar").css("opacity","1");
                    $(".observed_container>.ammo_bar>.ammo_txt").html(weapon.ammo_clip + "<sub>/" +weapon.ammo_reserve + "</sub>");
                }
            }
        } 

        if (weapon.type == "C4") {
            $(".observed_container>.bomb_defuse").html(statistics.defusekit ? $("<img width='21px' />").attr("src", "/files/img/elements/bomb.png") : $("<img width='21px' />").attr("src", "/files/img/elements/bomb.png"));
        }
    }

    if ($("#nades").html() == "") {
        $("#nades").html("No Utility");
    }

    $(".observed_container>.health_bar>.health").html(statistics.health);


    // SET AVATAR

    let result = loadAvatar(player.steamid);
    let player_number = 0;

    if (result != 1) { 
            $(".observed_container>.photo_container>.photo_player").html("<img width='150px' height='150px' src='/av/" + result + "'/>");
            // $(".observed_container>.photo_container>.photo_player").css("")
    } else if (result == "1") {
        if (player.observer_slot > 5) {
            player_number = player.observer_slot - 5;
        } else {
            player_number = player.observer_slot;
        }
        if (player.team == "CT") {
            $(".observed_container>.photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/CT_"+player_number+".png"));
        } else {
            $(".observed_container>.photo_container>.photo_player").html($("<img width='150px' height='150px'  />").attr("src", "../../files/img/players/T_"+player_number+".png"));
        }
    }
    

}





let l_alive = 0;
let r_alive = 0;


let l_grenade = 0;
let l_smoke = 0;
let l_molo = 0;
let l_flash = 0;

let pl = 0;
let pl_grenade = 0;
let pl_smoke = 0;
let pl_molo = 0;
let pl_flash = 0;

let r_grenade = 0;
let r_smoke = 0;
let r_molo = 0;
let r_flash = 0;

let pr = 0;
let pr_grenade = 0;
let pr_smoke = 0;
let pr_molo = 0;
let pr_flash = 0;

let l_team_value = 0;
let r_team_value = 0;

var left_team_value = 0;
var right_team_value = 0;

let left_alive = 0;
let right_alive = 0;

function fillPlayers(teams) {

    if (bottom_sponsor_length == 1) {
        $(".sponsor>.inner").css("background-image", "url(../../bottom_sponsors/" + bottom_sponsors_array[0] +".png)");
    }

    if (left_sponsor_length == 1) {
        $(".side_left_sponsor>.inner").css("background-image", "url(../../left_sponsors/" + left_sponsors_array[0] +".png)");
    }

    if (right_sponsor_length == 1) {
        $(".side_right_sponsor>.inner").css("background-image", "url(../../right_sponsors/" + right_sponsors_array[0] +".png)");
    }

    if (teams.left.players) {
        for (var i = 0; i < 5; i++) {
            if (i >= teams.left.players.length) {
                $("#left").find("#player" + (i + 1)).css("opacity", "0");
            } else {
                fillPlayer(teams.left.players[i], i, "left", teams.left.players.length);
                fillGrenadeLeft(teams.left.players[i], i, "left", teams.left.players.length);
                $("#left").find("#player" + (i + 1)).css("opacity", "1");
                $(".player_count_left>.left_count").html(l_alive);
            }

            left_alive = l_alive;
            if (i == 4) {
                l_grenade = 0;
                l_smoke = 0;
                l_molo = 0;
                l_flash = 0;
                pl = 0;
                pl_grenade = 0;
                pl_smoke = 0;
                pl_molo = 0;
                pl_flash = 0;

                l_alive = 0;
                left_team_value = l_team_value;
                l_team_value = 0;
            }
        }
    }
    if (teams.right.players) {
        for (var i = 0; i < 5; i++) {
            if (i >= teams.right.players.length) {
                $("#right").find("#player" + (i + 1)).css("opacity", "0");
            } else {
                fillPlayer(teams.right.players[i], i, "right", teams.right.players.length);
                fillGrenadeRight(teams.right.players[i], i, "right", teams.left.players.length);
                $("#right").find("#player" + (i + 1)).css("opacity", "1");
                $(".player_count_right>.right_count").html(r_alive);
            }

            right_alive = r_alive;
            if (i == 4) {
                r_grenade = 0;
                r_smoke = 0;
                r_molo = 0;
                r_flash = 0;
                pr = 0;
                pr_grenade = 0;
                pr_smoke = 0;
                pr_molo = 0;
                pr_flash = 0;
                right_team_value = r_team_value;
                r_team_value = 0;
                r_alive = 0;

            }
        }
    }
    var side;
    // if((left_alive != 1) && (right_alive != 1)){
    //     $(".topbar_i_counter>.title").html("PLAYERS ALIVE");
    //     $(".topbar_i_counter>.title").css("background", "rgba(236,236,236)");
    //     $(".topbar_i_counter>.title").css("color", "rgb(0,0,0)");
    //     $(".topbar_i_counter>.title").css("font-size", "15px");
    //     $(".topbar_i_counter>.title").css("line-height", "1.7");
    //     side = 0;
    // }else{  

    //     $(".topbar_i_counter>.title").html("CLUTCH SITUATION");
    //     $(".topbar_i_counter>.title").css("color", "rgb(0,0,0)");
    //     $(".topbar_i_counter>.title").css("font-size", "12px");
    //     $(".topbar_i_counter>.title").css("line-height", "2.6");
    //     if (teams.right.side == "ct") {
    //         $(".topbar_i_counter>.title").css("background", "linear-gradient(to right,rgba("+ t_color +") 0%, rgb("+ t_color +") 20%,  rgb(0,0,0) 50% ,rgb("+ ct_color +") 80%, rgb("+ ct_color +") 100%");
    //     } else {
    //         $(".topbar_i_counter>.title").css("background", "linear-gradient(to right,rgba("+ ct_color +") 0%, rgb("+ ct_color +") 20%,  rgb(0,0,0) 50% ,rgb("+ t_color +") 80%, rgb("+ t_color +") 100%");
    //     }

    // }
}




function fillGrenadeLeft(player, nr, side, max) {
    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    if (statistics.health !== 0) {
        l_alive = l_alive + 1;
    }



    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {

                if (name == "hegrenade") {
                    l_grenade++;
                    pl_grenade = pl_grenade + 1;
                }

                if (name == "incgrenade" || name == "molotov") {
                    l_molo++;
                    pl_molo = pl_molo + 2;
                }

                if (name == "flashbang") {
                    l_flash++;
                    pl_flash = pl_flash + 3;
                }

                if (name == "smokegrenade") {
                    l_smoke++;
                    pl_smoke = pl_smoke + 4;
                }

            }

        }

        pl = pl_smoke + pl_flash + pl_molo + pl_grenade;

        var progress_left_spam_width = pl * 100 / 50 + "%";

        $(".Spam_A>.Spam_BG>.Progress").css("width", progress_left_spam_width).css("transition", "all 0.5s ease 0s");


        $(".Spam_A>.Spam_BG>.Bottom_Spam>.HE>.HE_Txt").html("x" + l_grenade);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Smoke>.Smoke_Txt").html("x" + l_smoke);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Inc>.Inc_Txt").html("x" + l_molo);
        $(".Spam_A>.Spam_BG>.Bottom_Spam>.Flash>.Flash_Txt").html("x" + l_flash);
    }

}

function fillGrenadeRight(player, nr, side, max) {
    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    if (statistics.health !== 0) {
        r_alive = r_alive + 1;
    }

    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type == "Grenade") {
            for (let x = 0; x < weapon.ammo_reserve; x++) {

                if (name == "hegrenade") {
                    r_grenade++;
                    pr_grenade = pr_grenade + 1;
                }

                if (name == "incgrenade" || name == "molotov") {
                    r_molo++;
                    pr_molo = pr_molo + 2;
                }

                if (name == "flashbang") {
                    r_flash++;
                    pr_flash = pr_flash + 3;
                }

                if (name == "smokegrenade") {
                    r_smoke++;
                    pr_smoke = pr_smoke + 4;
                }

            }

        }


        pr = pr_smoke + pr_flash + pr_molo + pr_grenade;

        var progress_right_spam_width = pr * 100 / 50 + "%";

        $(".Spam_B>.Spam_BG>.Progress").css("width", progress_right_spam_width).css("transition", "all 0.5s ease 0s");

        $(".Spam_B>.Spam_BG>.Bottom_Spam>.HE>.HE_Txt").html("x" + r_grenade);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Smoke>.Smoke_Txt").html("x" + r_smoke);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Inc>.Inc_Txt").html("x" + r_molo);
        $(".Spam_B>.Spam_BG>.Bottom_Spam>.Flash>.Flash_Txt").html("x" + r_flash);
    }

}



function fillPlayer(player, nr, side, max) {


    let slot = player.observer_slot;
    let statistics = player.getStats();
    let weapons = player.getWeapons();
    let steamid = player.steamid;

    let team = player.team.toLowerCase();

    let health_color;

    let $player = $(".players_" + side + "_container").find("#player" + (nr + 1));

    let $bottom = $player.find(".bottom_bar");
    let $top = $player.find(".top_bar");

    let result = loadAvatar(player.steamid);
    let player_number = 0;

        if (result != "1") {
            $player.find(".photo_container>.photo_player").html($("<img width='75px' height='75px'  />").attr("src", "/av/" + result));

        } else if (result == "1") {
            if (player.observer_slot > 5) {
                player_number = player.observer_slot - 5;
            } else {
                player_number = player.observer_slot;
            }
            if (team == "ct") {

                $player.find(".photo_container>.photo_player").html($("<img width=80px' height='80px'  />").attr("src", "../../files/img/players/CT_"+player_number+".png"));
                

            } else {
                $player.find(".photo_container>.photo_player").html($("<img width='80px' height='80px'  />").attr("src", "../../files/img/players/T_"+player_number+".png"));

            }
        }


    let gradient = "linear-gradient(to " + side + ", rgba(25,25,25,0)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";


    if (side == "right") {
        if (team == "ct") {
            health_color = ct_color;
;
            $(".bo5_container>.right_series").find(".block").css("border-color", "rgba(" + ct_color + " ,1)");
            $(".bo5_container>.right_series").find(".win").css("background", "rgba(" + ct_color + " ,1)");
            $(".Win_container>.win_container_right>.txt").css("color", " rgba(" + ct_color + ",1) ");
            $(".header_container>.pause_container_right>.txt").css("color", " linear-gradient( -90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            // $(".header_container>.right_series").css("background", " linear-gradient( -90deg, rgba(" + darker_ct_color + ",1) 0%, rgba(" + darker_ct_color + ",1) 100%)");
            $(".header_container>.upper_right_line").css("background", " linear-gradient( -90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            $(".header_container>.right_score").css("color", "rgba(" + ct_color + ",1)");
            $(".header_container>.right_separator").css("background", " linear-gradient( -90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            $(".alerts_container>.right>.background").css("background", "linear-gradient(to left, rgba(0,0,0, 0.85) 100%, transparent 100%)");
            $(".header_container>.right_name").css("color", "rgba(" + ct_color + ",1)");
            // $(".header_container>.right_score").css("box-shadow", "-7px 0px 0px 0px rgb("+ct_color+"), 7px 0px 0px 0px rgb("+ct_color+")");
        } else {
            health_color = t_color;

            $(".bo5_container>.right_series").find(".block").css("border-color", "rgba(" + t_color + ",1)");
            $(".bo5_container>.right_series").find(".win").css("background", "rgba(" + t_color + ",1)");
            $(".Win_container>.win_container_right>.txt").css("color", " rgba(" + t_color + ",1) ");
            $(".header_container>.pause_container_right").css("background", " linear-gradient( -90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            // $(".header_container>.right_series").css("background", " linear-gradient( 90deg, rgba(" + darker_t_color + ",1) 0%, rgba(" + darker_t_color + ",1) 100%)");
            $(".header_container>.upper_right_line").css("background", " linear-gradient( -90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            $(".header_container>.right_separator").css("background", " linear-gradient( -90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            $(".alerts_container>.right>.background").css("background", "linear-gradient(to left, rgba(0,0,0, 0.85) 100%, transparent 100%)");
            $(".header_container>.right_name").css("color", "rgba(" + t_color + ",1)");
            $(".header_container>.right_score").css("color", "rgba(" + t_color + ",1)");
            // $(".header_container>.right_score").css("box-shadow", "-7px 0px 0px 0px rgb("+t_color+"), 7px 0px 0px 0px rgb("+t_color+")");
        }
    }

    if (side == "left") {
        if (team == "ct") {
            health_color = ct_color;
            $(".bo5_container>.left_series").find(".block").css("border-color", "rgba(" + ct_color + " ,1)");
            $(".bo5_container>.left_series").find(".win").css("background", "rgba(" + ct_color + ", 1)");
            $(".alerts_container>.left>.background").css("background", "linear-gradient(to left, rgba(0,0,0, 0.85) 100%, transparent 100%)");
            $(".Win_container>.win_container_left>.txt").css("color", " rgba(" + ct_color + ",1) ");
            $(".header_container>.pause_container_left").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            // $(".header_container>.left_series").css("background", " linear-gradient( 90deg, rgba(" + darker_ct_color + ",1) 0%, rgba(" + darker_ct_color + ",1) 100%)");
            $(".header_container>.left_separator").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            $(".header_container>.upper_left_line").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) -50%, rgba(" + ct_color + ",1) 100%)");
            $(".header_container>.left_name").css("color", "rgba(" + ct_color + ",1)");
            $(".header_container>.left_score").css("color", "rgba(" + ct_color + ",1)");
            // $(".header_container>.left_score").css("box-shadow", "-7px 0px 0px 0px rgb("+ct_color+"), 7px 0px 0px 0px rgb("+ct_color+")");
        } else {
            health_color = t_color;
            $(".bo5_container>.left_series").find(".block").css("border-color", "rgba(" + t_color + ",1)");
            $(".bo5_container>.left_series").find(".win").css("background", "rgba(" + t_color + ",1)");
            $(".alerts_container>.left>.background").css("background", "linear-gradient(to left, rgba(0,0,0, 0.85) 100%, transparent 100%)");
            $(".Win_container>.win_container_left>.txt").css("color", " rgba(" + t_color + ",1) ");
            $(".header_container>.pause_container_left").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            // $(".header_container>.left_series").css("background", " linear-gradient( 90deg, rgba(" + darker_t_color + ",1) 0%, rgba(" + darker_t_color + ",1) 100%)");
            $(".header_container>.left_separator").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            $(".header_container>.upper_left_line").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) -50%, rgba(" + t_color + ",1) 100%)");
            $(".header_container>.left_name").css("color", "rgba(" + t_color + ",1)");
            $(".header_container>.left_score").css("color", "rgba(" + t_color + ",1)");
            // $(".header_container>.left_score").css("box-shadow", "-7px 0px 0px 0px rgb("+t_color+"), 7px 0px 0px 0px rgb("+t_color+")");
        }
    }

    //PLAYER KILLS AND DEATHS
    $player.find(".roundkills>.txt").html(statistics.round_kills);

    if (statistics.round_kills > 0) {
        $player.find(".roundkills").css("display", "block");
        $player.find(".round_icon").css("display", "block");
    } else {
        $player.find(".roundkills").css("display", "none");
        $player.find(".round_icon").css("display", "none");
    }


    if (statistics.round_kills > 0) {
        $bottom.find(".k").html(statistics.kills);
    } else {
        $bottom.find(".k").html(statistics.kills);
    }

    $bottom.find(".d").text(statistics.deaths);


    //OBSERVED

    // $player.find(".separator").removeClass("observed");
    // $player.find(".bottom_bar").removeClass("observed_left");
    // $player.find(".bottom_bar").removeClass("observed_right");
    $player.find(".background").css("outline", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".Round_Kills").css("outline", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".Round_Kills").css("box-shadow", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".background").css("box-shadow", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".diamond").css("box-shadow", "none").css("transition", "all 0.5s ease 0s");
    $player.find(".Round_Kills").css("transform", "translateX(0px)").css("transition", "all 0.5s ease 0s");
    $player.css("transform", "translateY(0px)").css("transition", "all 0.5s ease 0s");


    /*################################################# CHANGING WHEN A PLAYERS DIES #################################################### */

    $player.removeClass("dead").addClass("alive").removeClass(statistics.health == 0 ? "alive" : "").addClass(statistics.health == 0 ? "dead" : "");
    $player.find(".health_text").removeClass("dead_life").addClass("alive_life").removeClass(statistics.health == 0 ? "alive_life" : "").addClass(statistics.health == 0 ? "dead_life" : "");
    if (flag_replays == 1) {
        $player.addClass("replays");
    }



    /* ################################################################################################################################### */

    // SIDE COLORS

    if (player.observer_slot <= 5) {
        if (team == "ct") {
            $top.find(".health_bar").css("background", " linear-gradient( 90deg, rgba(" + dark_ct_color + ",1) 0%, rgba(" + dark_ct_color + ",1) 20% , rgba(" + ct_color + ",1) 85% , rgba(" + ct_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(90deg, rgba(" + dark_ct_color + ",1)75%, rgba(" + ct_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + ct_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+ct_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_ct_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + ct_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_ct.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + ct_color + ")");
    
        } else if (team == "t") {
            $top.find(".health_bar").css("background", " linear-gradient( 90deg, rgba(" + dark_t_color + ",1) 0%, rgba(" + dark_t_color + ",1) 20% ,rgba(" + t_color + ",1) 85% , rgba(" + t_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(90deg, rgba(" + dark_t_color + ",1)75%, rgba(" + t_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + t_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+t_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_t_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + t_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_t.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + t_color + ")");
        }
    } else if (player.observer_slot < 10) {
        if (team == "ct") {
            $top.find(".health_bar").css("background", " linear-gradient( -90deg, rgba(" + dark_ct_color + ",1) 0%, rgba(" + dark_ct_color + ",1) 20%, rgba(" + ct_color + ",1) 85% , rgba(" + ct_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(-90deg, rgba(" + dark_ct_color + ",1)75%, rgba(" + ct_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + ct_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+ct_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_ct_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + ct_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_ct.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + ct_color + ")");
    
        } else if (team == "t") {
            $top.find(".health_bar").css("background", " linear-gradient( -90deg, rgba(" + dark_t_color + ",1) 0%, rgba(" + dark_t_color + ",1) 20%, rgba(" + t_color + ",1) 85% , rgba(" + t_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(-90deg, rgba(" + dark_t_color + ",1)75%, rgba(" + t_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + t_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+t_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_t_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + t_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_t.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + t_color + ")");
        } 
    } else if (player.observer_slot == 10) {
        if (team == "ct") {
            $top.find(".health_bar").css("background", " linear-gradient( -90deg, rgba(" + dark_ct_color + ",1) -0%, rgba(" + dark_ct_color + ",1) 20%, rgba(" + ct_color + ",1) 85% , rgba(" + ct_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(-90deg, rgba(" + dark_ct_color + ",1)75%, rgba(" + ct_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + ct_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+ct_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_ct_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + ct_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_ct.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + ct_color + ")");
    
        } else if (team == "t") {
            $top.find(".health_bar").css("background", " linear-gradient( -90deg, rgba(" + dark_t_color + ",1) -0%, rgba(" + dark_t_color + ",1) 20%, rgba(" + t_color + ",1) 85% , rgba(" + t_color + ",1) 100%)");
            $player.find(".health_shade").css("background", "linear-gradient(-90deg, rgba(" + dark_t_color + ",1)75%, rgba(" + t_color + ",0) 100%)");
            $player.find(".separator").css("background", "rgb(" + t_color + ")");
            // $player.find(".top_bar").css("border-bottom", "2px solid rgb("+t_color+")");
            $player.find(".top_bar").css("background", "rgba("+darker_t_color+", 0.6)");
            // $player.find(".roundkills").css("box-shadow", "0px 0px 5px 5px rgb(" + t_color + ")");
            $player.find(".round_icon").css("background-image" , "url(../../files/img/kills_t.png)")
            $player.find(".roundkills>.txt").css("color", "rgb(" + t_color + ")");
        } 
    }
//aquiv1

    if (statistics.health == 0) {
        $player.find(".flex_lower_left").css("opacity", "0");
        $player.find(".flex_lower_right").css("opacity", "0");
        $player.find(".flex_money_bomb").css("transform", "translate(-97px,-47px)");
        $player.find(".flex_money_bomb_right").css("transform", "translate(97px,-47px)");
        $player.find(".background").css("width", "230px").css("transition", "all 0.5s ease 0s");
        $player.find(".top_bar").css("width", "230px").css("transition", "all 0.5s ease 0s");
        $bottom.find(".weapon_icon").css("opacity", "0");
        // $top.find("health_red").css("opacity", "0").css("transition", "all 0.5s ease 0s"); 
        $bottom.find(".grenades").css("opacity", "0");
        $top.find(".weapon_icon").css("opacity", "0");
        $bottom.find(".dead_utility").css("opacity", "1");
        $bottom.find(".dead_utility").css("animation", "deadUtility 140s ease-in-out forwards"); 

    } else {
        $player.find(".flex_lower_left").css("opacity", "1");
        $player.find(".flex_lower_right").css("opacity", "1");
        $player.find(".flex_money_bomb").css("transform", "translate(0px,0px)");
        $player.find(".flex_money_bomb_right").css("transform", "translate(0px,0px)");
        $player.find(".background").css("width", "340px").css("transition", "all 0.5s ease 0s");
        $player.find(".top_bar").css("width", "340px").css("transition", "all 0.5s ease 0s");
        // $top.find("health_red").css("opacity", "1");
        $bottom.find(".weapon_icon").css("opacity", "1");
        $bottom.find(".grenades").css("opacity", "1");
        $top.find(".weapon_icon").css("opacity", "1");
        $bottom.find(".dead_utility").css("animation", ""); 
        $bottom.find(".dead_utility").css("opacity", "0");
        let utility_flag = false;
        for (let key in weapons) {
            let weapon = weapons[key];
            if (weapon.type == "Grenade") {
                if (key == "weapon_2" || (key == "weapon_3" && weapons.weapon_2.type != "Grenade")) {
                    utility_flag = true;
                    $bottom.find(".dead_utility").css("background-image", "url(../../files/img/grenades/" + weapon.name + ".png)");
                } 
            }
        }

        if (!utility_flag) {
            $bottom.find(".dead_utility").css("background-image", "none");
        }
    }




    if (player.observer_slot <= 5) {

        player_name = player.name;
        if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html(player.observer_slot);

        $top.find(".health_bar").css("width", statistics.health + "%");
        $top.find(".health_red").css("width", statistics.health + "%").css("transition", "width 1.3s linear 1s");

        $player.find(".player_bar_shadow").css("height", statistics.health + "%");

        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }
        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        l_team_value = l_team_value + statistics.money;

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        } else {
            $top.find(".health_bar").css("border-radius", "0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        }

    } else if (player.observer_slot < 10) {
        player_name = player.name;
        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html(player.observer_slot);

        $top.find(".health_bar").css("width", statistics.health + "%");
        $top.find(".health_red").css("width", statistics.health + "%").css("transition", "width 1.3s linear 1s");
        // $player.find(".health_shade").css("height", statistics.health + "%");
        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }

        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        } else {
            $top.find(".health_bar").css("border-radius", " 0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        }

        r_team_value = r_team_value + statistics.money;

    } else if (player.observer_slot == 10) {

        player_name = player.name;
        if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
            player_name = player_name.slice(letters);
        } 
        if (player_name.length > 10) player_name = player_name.substring(0, 10);
        $player.find(".player_name").html(player_name.split(" ").join(""));

        $player.find(".number").html("0");

        $top.find(".health_bar").css("width", statistics.health + "%");
        $top.find(".health_red").css("width", statistics.health + "%").css("transition", "width 1.3s linear 1s");


        if (statistics.health == 0) {
            var flash_amount = 0;
        } else {
            var flash_amount = (statistics.flashed * 0.9 / 255);
        }


        $player.find(".flash").css("background", "rgba(255,255,255," + flash_amount + ")");

        if (statistics.health == 0) {
            gradient = "linear-gradient(to " + side + ", rgb(25,25,25)" + (100 - statistics.health) + "%, " + health_color + " " + (100 - statistics.health) + "%)";
            if ($top.find(".player_bar").hasClass("test")) {} else {
                $top.find(".player_bar").addClass('test');
            }
        } else {
            $top.find(".player_bar").removeClass('test');
        }

        if (statistics.health <= 98) {
            $top.find(".health_bar").css("border-radius", "0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        } else {
            $top.find(".health_bar").css("border-radius", " 0px 0px 0px 0px")
            $top.find(".player_bar_shadow").css("border-radius", "0px 0px 0px 0px")
        }

        r_team_value = r_team_value + statistics.money;
    }


    $player.find(".health_text").text(statistics.health);


    $top.find(".kad_bar").text(statistics.kills + " K / " + statistics.assists + " A / " + statistics.deaths + " D");



    if (statistics.helmet) {
        $player.find(".helmet_background").css("display", "block");
        $player.find(".helmet_background").css("opacity", "1");
    } else {
        $player.find(".helmet_background").css("display", "block");
        $player.find(".helmet_background").css("opacity", "0");
    }
    if (statistics.armor > 0) {
        $player.find(".armor_background").css("display", "block");
        $player.find(".armor_background").css("opacity", "1");
    } else {
        $player.find(".armor_background").css("display", "block");
        $player.find(".armor_background").css("opacity", "0");
    }


    $player.find(".flex_money_bomb>.defuse").css("display", "none");
    $player.find(".flex_money_bomb>.bomb_2").css("display", "none");

    $player.find(".bomb_defuse").html(statistics.defusekit ? $("<img width='17px' />").attr("src", "/files/img/elements/defuse.png") : "");
    let bomb_defuse_var = 0;
    if (statistics.defusekit) {
        bomb_defuse_var = 1;
    }

    $bottom.find(".money>.moneys").text("$" + statistics.money);

    $bottom.find(".weapon_icon").html("");
    $bottom.find(".grenades").html("");
    $top.find(".weapon_icon").html("");
    $bottom.find("#deaths_pp").html("");

    var best= 0;
    for (let key in weapons) {
        let weapon = weapons[key];
        let name = weapon.name.replace("weapon_", "");
        let state = weapon.state;
        let view = "";
        let type = weapon.type;

        if (type != "C4" && type != "Knife") {
            view += weapon.state == "active" ? "checked" : "";
            if (type == "Grenade") {
                for (let x = 0; x < weapon.ammo_reserve; x++) {
                    $bottom.find(".grenades").append($("<img />").attr("src", "/files/img/grenades/weapon_" + name + ".png").addClass(view));
                }
            } else if (type) {
                view += side == "right" ? " img-hor" : "";
                if (type == "Pistol") {
                    if (best == 0) {
                        if (side == "right") {
                            $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                        } else {
                            $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                        }
                    }
                } else {
                    best = 1;
                    if (side == "right") {
                        $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                    } else {
                        $bottom.find(".weapon_icon").css("background-image", " url(../../files/img/weapons/" + name + ".png)")
                    }
                }
            }
        } else if (type == "C4") {
            $player.find(".bomb_defuse").html(statistics.defusekit ? $("<img width='17px' />").attr("src", "/files/img/elements/bomb.png") : $("<img width='17px' />").attr("src", "/files/img/elements/bomb.png"));
            bomb_defuse_var = 1;
        }
    }

    if (player.observer_slot <= 5) {
        if (bomb_defuse_var == 1) {
            $player.find(".grenades").css("transform", "translateX(0px)");
        } else {
            $player.find(".grenades").css("transform", "translateX(30px)");
        }
    } else if (player.observer_slot < 10) {
        if (bomb_defuse_var == 1) {
            $player.find(".grenades").css("transform", "translateX(0px)");
        } else {
            $player.find(".grenades").css("transform", "translateX(-30px)");
        }
    } else if (player.observer_slot == 10) {
        if (bomb_defuse_var == 1) {
            $player.find(".grenades").css("transform", "translateX(0px)");
        } else {
            $player.find(".grenades").css("transform", "translateX(-30px)");
        }
    }

    if (!start_money[steamid]) {
        start_money[steamid] = statistics.money;
    }
    $("#money_bar" + slot).find("#stat_money_bar").html("-" + (start_money[steamid] - statistics.money) + "$");
}


var isDefusing = false;


var bomb_time,
    bomb_timer,
    bomb_timer_css;
bomb_time = 0;

function bomb(time) {
    if (Math.pow((time - bomb_time), 2) > 1) {
        clearInterval(bomb_timer);
        bomb_time = parseFloat(time);
        if (bomb_time > 0) {
            bomb_timer = setInterval(function() {
                bomb_time = bomb_time - 0.01;
            }, 10);
        } else {
            clearInterval(bomb_timer);
        }
    }
}

function resetBomb() {
    clearInterval(bomb_timer);
}


//SOME other weird vars
var menu = false;
var freezetime = false;
let last_round = 0;

function updatePage(data) {

    var observed = data.getObserved();
    var phase = data.phase();
    var team_one = data.getTeamOne();
    var team_two = data.getTeamTwo();

    var matchup = data.getMatchType();
    var match = data.getMatch();



    var map = data.map();
    letters = (match.letter !== undefined) ? match.letter.letters : "none"; // Map 1 Name
    map1 = (match.map_pick !== undefined) ? match.map_pick.map1 : "none"; // Map 1 Name
    map2 = (match.map_pick !== undefined) ? match.map_pick.map2 : "none"; // Map 2 Name
    map3 = (match.map_pick !== undefined) ? match.map_pick.map3 : "none"; // Map 3 Name

    current_map = (match.map_pick !== undefined) ? match.map_pick.map_current : "3";
    swapsides = (match.map_pick !== undefined) ? match.map_pick.sides_swap : "0";


    map1_res1 = (match.map_1_res !== undefined) ? match.map_1_res.map_left_res : "0"; 
    map1_res2 = (match.map_1_res !== undefined) ? match.map_1_res.map_right_res : "0"; 
    map2_res1 = (match.map_2_res !== undefined) ? match.map_2_res.map_left_res : "0"; 
    map2_res2 = (match.map_2_res !== undefined) ? match.map_2_res.map_right_res : "0"; 
    map3_res1 = (match.map_3_res !== undefined) ? match.map_3_res.map_left_res : "0"; 
    map3_res2 = (match.map_3_res !== undefined) ? match.map_3_res.map_right_res : "0"; 

    match_type = (match.server !== undefined) ? match.server.server_type : "none";


    let left,
        right;
    var players = data.getPlayers();
    var round = data.round();
    var map = data.map();
    var previously = data.previously();

    var round_now = map.round + (round.phase == "over" || round.phase == "intermission" ?
        0 :
        1);
    if ((round.phase == "freezetime" && !freezetime) || round_now != last_round) {
        start_money = {};
    }


    var round_wins = map.round_wins;
    var result = [];
    for (var i in round_wins)
        result.push([i, round_wins[i]]);

    to1 = result.length;
    to = to1 + 0;

    let round_html = "";
    let round_html_ct_first = "";
    let round_html_t_first = "";
    let round_html_ct_second = "";
    let round_html_t_second = "";
    let ifOT = "";



    for (i = 0; i < result.length; i++) {

        nr = i + 1;

        if (map.round <= 30) {
            if (nr <= 15) {

                ifOT = "";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_first = round_html_ct_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_first = round_html_ct_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_first = round_html_t_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_first = round_html_t_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            } else if (nr > 15 && nr <= 30) {

                ifOT = "";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_second = round_html_ct_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_second = round_html_ct_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_second = round_html_t_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_second = round_html_t_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }
        } else if (map.round == 31) {

        } else if (map.round > 31) {
            if (nr <= 3) {

                ifOT = "<div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div><div class='none'><img src='../files/img/round_history/none.png'></img></div>";

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_first = round_html_ct_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_first = round_html_ct_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_first = round_html_t_first + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_first = round_html_t_first + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }
            if (nr <= 6 && nr > 3) {

                if (round_wins[nr].startsWith('ct_')) {
                    round_html_ct_second = round_html_ct_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_ct_second = round_html_ct_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }

                if (round_wins[nr].startsWith('t_')) {
                    round_html_t_second = round_html_t_second + "<div class='" + round_wins[nr] + "'><img src='../files/img/round_history/" + round_wins[nr] + ".png'></img></div>";
                } else {
                    round_html_t_second = round_html_t_second + "<div class='none'><img src='../files/img/round_history/none.png'></img></div>";
                }
            }


        }


    }


    $("#stat_ct_first").html(ifOT + round_html_ct_first);
    $("#stat_ct_second").html(round_html_ct_second);
    $("#stat_t_first").html(ifOT + round_html_t_first);
    $("#stat_t_second").html(round_html_t_second);


    var longd = 10;
    var team_ct = data.getCT();
    var team_t = data.getT();
    var test_player2 = data.getPlayer(2);
    var tscore = [];
    $("body").css("display", !map || menu ?
        "none" :
        "block");
    if (test_player2) {
        left = test_player2
            .team
            .toLowerCase() == "ct" ?
            team_ct :
            team_t;
        right = test_player2
            .team
            .toLowerCase() != "ct" ?
            team_ct :
            team_t;

        crlleft = left.consecutive_round_losses;
        crlright = right.consecutive_round_losses;

        teams.left.timeouts = left.timeouts_remaining;
        teams.right.timeouts = right.timeouts_remaining;

        teams.left.name = team_one.team_name || left.name;
        teams.right.name = team_two.team_name || right.name;

        teams.left.score = left.score;
        teams.right.score = right.score;

        teams.left.flag = team_one.country_code || null;
        teams.right.flag = team_two.country_code || null;

        teams.left.logo = team_one.logo || null;
        teams.right.logo = team_two.logo || null;

        teams.left.map_score = team_one.map_score || 0;
        teams.right.map_score = team_two.map_score || 0;

        teams.left.side = left.side || null;
        teams.right.side = right.side || null;

        teams.left.players = left.players || null;
        teams.right.players = right.players || null;

        $("#left_blocks")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase());
        $("#right_blocks")
            .removeClass("ct t")
            .addClass(test_player2.team.toLowerCase() != "ct" ?
                "ct" :
                "t");

        var crl_value_left = 0;
        var crl_value_right = 0;
        var crl_x_left = 0;
        var crl_x_right = 0;

        if (crlleft == 0) {
            crl_value_left = 1400;
            crl_x_left = 0;
        } else if (crlleft == 1) {
            crl_value_left = 1900;
            crl_x_left = 1;
        } else if (crlleft == 2) {
            crl_value_left = 2400;
            crl_x_left = 2;
        } else if (crlleft == 3) {
            crl_value_left = 2900;
            crl_x_left = 3;
        } else if (crlleft >= 4) {
            crl_value_left = 3400;
            crl_x_left = 4;
        }

        if (crlright == 0) {
            crl_value_right = 1400;
            crl_x_right = 0;
        } else if (crlright == 1) {
            crl_value_right = 1900;
            crl_x_right = 1;
        } else if (crlright == 2) {
            crl_value_right = 2400;
            crl_x_right = 2;
        } else if (crlright == 3) {
            crl_value_right = 2900;
            crl_x_right = 3;
        } else if (crlright >= 4) {
            crl_value_right = 3400;
            crl_x_right = 4;
        }





        // Update Firepower


        var total_money = left.equip_value + right.equip_value;
        var left_percentage = left.equip_value / total_money * 100;
        var right_percentage = right.equip_value / total_money * 100;

        $(".firepower > .left").css("width", left_percentage + "%");
        $(".firepower > .right").css("width", right_percentage + "%");


    }


    /* Update Header */

    // Update Round
    var round_now = teams.left.score + teams.right.score + 1;

    // Update Names
    left_name_team = teams.left.name;
    right_name_team = teams.right.name;
    var team_left_name = teams.left.name;
    if (team_left_name.length > 23) team_left_name = team_left_name.substring(0, 13);
    $(".left_name").html(team_left_name);

    var team_right_name = teams.right.name;
    if (team_right_name.length > 23) team_right_name = team_right_name.substring(0, 13);
    $(".right_name").html(team_right_name);

    // Update Colors

    var left_color;
    var right_color;


    // Testing Teams
    if (teams.left.side == "ct" && teams.right.side == "t") {

        left_color = ct_color;
        right_color = t_color;
        dark_left_color = dark_ct_color;
        dark_right_color = dark_t_color;
        darker_left_color = darker_ct_color;
        darker_right_color = darker_t_color;



    } else if (teams.left.side == "t" && teams.right.side == "ct") {

        left_color = t_color;
        right_color = ct_color;
        dark_left_color = dark_t_color;
        dark_right_color = dark_ct_color;
        darker_left_color = darker_t_color;
        darker_right_color = darker_ct_color;


    }


    if ((matchup && matchup.toLowerCase() !== "bo3") || !matchup) {
        bo = 1;
        $(".header_container>.left_series>.bo1").css("opacity", "1");
        $(".header_container>.left_series>.bo3_map1").css("opacity", "0");
        $(".header_container>.left_series>.bo3_map2").css("opacity", "0");
        $(".header_container>.right_series>.bo1").css("opacity", "1");
        $(".header_container>.right_series>.bo3_map1").css("opacity", "0");
        $(".header_container>.right_series>.bo3_map2").css("opacity", "0");
        var map3_let = data.map();
        var map3 = map3_let.name.slice(3);
        current_map = 1; 
        if (teams.left.side == "ct") {
            $(".header_container>.left_series>.bo1").css("border-color", "rgba(" + dark_ct_color + ", 1)");
        } else {
            $(".header_container>.left_series>.bo1").css("border-color", "rgba(" + dark_t_color + ", 1)");
        }

        if (teams.right.side == "ct") {
            $(".header_container>.right_series>.bo1").css("border-color", "rgba(" + dark_ct_color + ", 1)");
        } else {
            $(".header_container>.right_series>.bo1").css("border-color", "rgba(" + dark_t_color + ", 1)");
        }

    } else if (matchup && matchup.toLowerCase() == "bo3") {
        bo = 3;
        $(".header_container>.left_series>.bo1").css("opacity", "0");
        $(".header_container>.right_series>.bo1").css("opacity", "0");
        $(".header_container>.left_series>.bo3_map1").css("opacity", "1");
        $(".header_container>.left_series>.bo3_map2").css("opacity", "1");
        $(".header_container>.right_series>.bo3_map1").css("opacity", "1");
        $(".header_container>.right_series>.bo3_map2").css("opacity", "1");

        if (match.team_1.map_score == 1) {
            if (teams.left.side == "ct") {
                $(".header_container>.left_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");
            } else {
                $(".header_container>.left_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
            }
        } else if (match.team_1.map_score == 2) {
            if (teams.left.side == "ct") {
                $(".header_container>.left_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");
                $(".header_container>.left_series>.bo3_map2").css("background-color", "linear-gradient(0deg, rgba(" + dark_ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");

            } else {
                $(".header_container>.left_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
                $(".header_container>.left_series>.bo3_map2").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
            }
        }

        if (match.team_2.map_score == 1) {
            if (teams.right.side == "ct") {
                $(".header_container>.right_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");
            } else {
                $(".header_container>.right_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
            }
        } else if (match.team_2.map_score == 0) {
            if (teams.right.side == "ct") {
                $(".header_container>.right_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");
                $(".header_container>.right_series>.bo3_map2").css("background-color", "linear-gradient(0deg, rgba(" + ct_color + ",1)) 0%, rgba(" + ct_color + ",1) 100%)");
            }   else {
                $(".header_container>.right_series>.bo3_map1").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
                $(".header_container>.right_series>.bo3_map2").css("background-color", "linear-gradient(0deg, rgba(" + t_color + ",1)) 0%, rgba(" + t_color + ",1) 100%)");
            }
        }
    } 

    // Apply

    var team_pick_right_name = teams.right.name;
    if (team_pick_right_name.length > 10) team_pick_right_name = team_pick_right_name.substring(0, 10);

    var team_pick_left_name = teams.left.name;
    if (team_pick_left_name.length > 10) team_pick_left_name = team_pick_left_name.substring(0, 10);
    /* MAP PICKS START  */
    if (swapsides == 0) {
        if (teams.left.logo) {
            $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url("/teams/' + teams.left.logo + '")');
        } else {
            if (teams.left.side == "t") {
                $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url(../../files/img/t.png)');
            } else {
                $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url(../../files/img/ct.png)');
            }
        }
        // $(".left_logo_container > .logo").css('background-image', 'url("/teams/' + teams.left.logo + '")');

        // $(".MapPick_BG>.Map1").css("background", "rgb("+ left_color +")");
        $(".MapPick_BG>.Map1>.Map").css("background-image", "url(../../files/img/maps/" + map1 + ".jpg)");
        $(".MapPick_BG>.Map1>.Map_Name").html("<font color='#fff'>" + map1 + "</font>");

        if (current_map == 1) {
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map1>.Currently").css('opacity', '1');
        } else {
            $(".MapPick_BG>.Map1>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'>" + map1_res1 + " - " + map1_res2 + "</font>");
            $(".MapPick_BG>.Map1>.Currently").css('opacity', '0');

            if(parseInt(map1_res1) > parseInt(map1_res2)) {
                if (teams.left.logo) {
                    $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url("/teams/' + teams.left.logo + '")');
                } else {
                    if (teams.left.side == "t") {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            } else if (parseInt(map1_res1) < parseInt(map1_res2)) {
                if (teams.right.logo) {
                    $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url("/teams/' + teams.right.logo + '")');
                } else {
                    if (teams.right.side == "t") {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            }
        }

        if (teams.right.logo) {
            $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url("/teams/' + teams.right.logo + '")');
        } else {
            if (teams.right.side == "t") {
                $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url(../../files/img/t.png)');
            } else {
                $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url(../../files/img/ct.png)');
            }
        }
        // $(".MapPick_BG>.Map2").css("background", "rgb("+right_color+")");
        $(".MapPick_BG>.Map2>.Map").css("background-image", "url(../../files/img/maps/" + map2 + ".jpg)");
        $(".MapPick_BG>.Map2>.Map_Name").html("<font color='#fff'>" + map2 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '1');
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", "");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", " rgba(0,0,0,0.5)");       
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '0');
        } else {
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", "");
            $(".MapPick_BG>.Map2>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>" + map2_res1 + " - " + map2_res2 + "</font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '0');
            if(parseInt(map2_res1) > parseInt(map2_res2)) {
                if (teams.left.logo) {
                    $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url("/teams/' + teams.left.logo + '")');
                } else {
                    if (teams.left.side == "t") {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            } else if (parseInt(map2_res1) < parseInt(map2_res2)) {
                if (teams.right.logo) {
                    $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url("/teams/' + teams.right.logo + '")');
                } else {
                    if (teams.right.side == "t") {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            }
        }

        $(".MapPick_BG>.Map3>.Map").css("background-image", "url(../../files/img/maps/" + map3 + ".jpg)");
        $(".MapPick_BG>.Map3>.Map_Name").html("<font color='#fff'>" + map3 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", " rgba(0,0,0,0.5)");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '0');
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", " rgba(0,0,0,0.5)");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '0');
        } else {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", "");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '1');
        }
    } else {
        if (teams.right.logo) {
            $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url("/teams/' + teams.right.logo + '")');
        } else {
            if (teams.right.side == "t") {
                $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url(../../files/img/t.png)');
            } else {
                $(".MapPick_BG>.Map1>.Team_Name").css('background-image', 'url(../../files/img/ct.png)');
            }
        }
        // $(".left_logo_container > .logo").css('background-image', 'url("/teams/' + teams.left.logo + '")');

        // $(".MapPick_BG>.Map1").css("background", "rgb("+ left_color +")");
        $(".MapPick_BG>.Map1>.Map").css("background-image", "url(../../files/img/maps/" + map1 + ".jpg)");
        $(".MapPick_BG>.Map1>.Map_Name").html("<font color='#fff'>" + map1 + "</font>");

        if (current_map == 1) {
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map1>.Currently").css('opacity', '1');
        } else {
            $(".MapPick_BG>.Map1>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map1>.Map_Result").html("<font color='#fff'>" + map1_res1 + " - " + map1_res2 + "</font>");
            $(".MapPick_BG>.Map1>.Currently").css('opacity', '0');

            if(parseInt(map1_res1) > parseInt(map1_res2)) {
                if (teams.left.logo) {
                    $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url("/teams/' + teams.left.logo + '")');
                } else {
                    if (teams.left.side == "t") {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            } else if (parseInt(map1_res1) < parseInt(map1_res2)) {
                if (teams.right.logo) {
                    $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url("/teams/' + teams.right.logo + '")');
                } else {
                    if (teams.right.side == "t") {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map1>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            }
        }

        if (teams.left.logo) {
            $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url("/teams/' + teams.left.logo + '")');
        } else {
            if (teams.left.side == "t") {
                $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url(../../files/img/t.png)');
            } else {
                $(".MapPick_BG>.Map2>.Team_Name").css('background-image', 'url(../../files/img/ct.png)');
            }
        }

        // $(".MapPick_BG>.Map2").css("background", "rgb("+right_color+")");
        $(".MapPick_BG>.Map2>.Map").css("background-image", "url(../../files/img/maps/" + map2 + ".jpg)");
        $(".MapPick_BG>.Map2>.Map_Name").html("<font color='#fff'>" + map2 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '1');
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", "");
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", " rgba(0,0,0,0.5)");       
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '0');
        } else {
            $(".MapPick_BG>.Map2>.Map_Shade").css("background", "");
            $(".MapPick_BG>.Map2>.Map").css("filter", "grayscale(1)");
            $(".MapPick_BG>.Map2>.Map_Result").html("<font color='#fff'>" + map2_res1 + " - " + map2_res2 + "</font>");
            $(".MapPick_BG>.Map2>.Currently").css('opacity', '0');
            if(parseInt(map2_res1) > parseInt(map2_res2)) {
                if (teams.left.logo) {
                    $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url("/teams/' + teams.left.logo + '")');
                } else {
                    if (teams.left.side == "t") {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            } else if (parseInt(map2_res1) < parseInt(map2_res2)) {
                if (teams.right.logo) {
                    $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url("/teams/' + teams.right.logo + '")');
                } else {
                    if (teams.right.side == "t") {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/t.png)');
                    } else {
                        $(".MapPick_BG>.Map2>.Team_Winner").css('background-image', 'url(../../files/img/ct.png)');
                    }
                }
            }
        }

        $(".MapPick_BG>.Map3>.Map").css("background-image", "url(../../files/img/maps/" + map3 + ".jpg)");
        $(".MapPick_BG>.Map3>.Map_Name").html("<font color='#fff'>" + map3 + "</font>");

        if (current_map == 2) {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", " rgba(0,0,0,0.5)");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '0');
        } else if (current_map == 1) {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", " rgba(0,0,0,0.5)");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '0');
        } else {
            $(".MapPick_BG>.Map3>.Map_Shade").css("background", "");
            $(".MapPick_BG>.Map3>.Map_Result").html("<font color='#fff'></font>");
            $(".MapPick_BG>.Map3>.Currently").css('opacity', '1');
        }
    }
    $(".round_winner>.rounds").html("<font color='#fff'>1</font>");
    /* MAP PICKS FINITO  */


    /* LOSS BONUS START*/
    var loss_bonus_left = crl_x_left;
    var loss_bonus_right = crl_x_right;
    var money_bonus_right = crl_value_right;
    var money_bonus_left = crl_value_left;


    if (loss_bonus_right == 0) {
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_right == 1) {
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_right == 2) {
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_right == 3) {
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else {
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(" + right_color + ",1)");
        $(".Team_B>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(" + right_color + ",1)");
    }

    if (loss_bonus_left == 0) {
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_left == 1) {
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_left == 2) {
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgba(100,100,100 , 1)");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else if (loss_bonus_left == 3) {
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgba(100,100,100 , 1)");
    } else {
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_1").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_2").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_3").css("background", "rgb("+left_color+")");
        $(".Team_A>.LossBonus>.bonus_boxes>.bonus_box_4").css("background", "rgb("+left_color+")");
    }


    /* LOSS BONUS FINITO*/

    /* EQUIPMENT MONEY START*/

    // $(".Team_A").css("border", "3px solid rgb("+ left_color+")");
    // $(".Spam_A").css("border", "3px solid rgb("+ left_color+")");

    // $(".Team_B").css("border", "3px solid rgb("+ right_color+")");
    // $(".Spam_B").css("border", "3px solid rgb("+ right_color+")");

    $(".Team_A>.TeamMoney>.Lower_Container>.txt").html("$" + left_team_value);
    $(".Team_A>.EquipValue>.Lower_Container>.txt").html("$" + left.equip_value);
    $(".Team_A>.LossBonus>.Lower_Container>.txt").html("$" + money_bonus_left);

    $(".Team_B>.TeamMoney>.Lower_Container>.txt").html("$" + right_team_value);
    $(".Team_B>.EquipValue>.Lower_Container>.txt").html("$" + right.equip_value);
    $(".Team_B>.LossBonus>.Lower_Container>.txt").html("$" + money_bonus_right);

    $(".Team_A>.LossBonus>.Upper_Container>.txt").css("color", "rgba(" + left_color + ",1)");
    $(".Team_A>.TeamMoney>.Upper_Container>.txt").css("color", "rgba(" + left_color + ",1) ");
    $(".Team_A>.EquipValue>.Upper_Container>.txt").css("color", " rgba(" + left_color + ",1)");

    $(".Team_B>.LossBonus>.Upper_Container>.txt").css("color", "rgba(" + right_color + ",1)");
    $(".Team_B>.TeamMoney>.Upper_Container>.txt").css("color", " rgba(" + right_color + ",1)");
    $(".Team_B>.EquipValue>.Upper_Container>.txt").css("color", " rgba(" + right_color + ",1)");

    $(".topbar_container>.topbar_i_counter>.line1").css("background", " linear-gradient( 90deg, rgba(" + dark_left_color + ",1) -20%, rgba(" + left_color + ",1) 100%)");
    $(".topbar_container>.topbar_i_counter>.line2").css("background", " linear-gradient( -90deg, rgba(" + dark_right_color + ",1) -20%, rgba(" + right_color + ",1) 100%)");

    // $(".Team_A>.LossBonus>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_A>.TeamMoney>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_A>.EquipValue>.Lower_Container>.txt").css("color", "rgb("+left_color+")");
    // $(".Team_B>.LossBonus>.Lower_Container>.txt").css("color", "rgb("+right_color+")");
    // $(".Team_B>.TeamMoney>.Lower_Container>.txt").css("color", "rgb("+right_color+")");
    // $(".Team_B>.EquipValue>.Lower_Container>.txt").css("color", "rgb("+right_color+")");

    var total_rounds = teams.left.score + teams.right.score;
    var total = total_rounds + 1;


    if (observed.steamid == 1 || !observed) {
        if (((phase.phase == "freezetime") && (total_rounds%3 == 2) && video_sponsor_length !== 0) || (phase.phase == "paused" || phase.phase == "timeout_ct" || phase.phase == "timeout_t")) {
            
            if ($(".bigger_sponsor>.inner").html() == "" && !flag_sponsor) {
                $(".observed_container").css("transition", "all 0.3s ease 0s").css("transform", "translateY(300px)");
                $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "0");
                $(".observed_container>.photo_container").css("opacity", "0");
                $(".sponsor").css("transition", "all 0.3s ease 0s").css("transform", "translateY(300px)");
                $(".bigger_sponsor").css("opacity", "1");
                $(".bigger_sponsor").css("transition", "all 0.7s ease 0.3s").css("transform", "translateY(0px)");
                bigger_sponsor_counter++;
                if (bigger_sponsor_counter >= video_sponsor_length) {
                    bigger_sponsor_counter = 0;
                }

                $(".bigger_sponsor>.inner").html("<video  width=560px autoplay muted><source src=../../video_sponsors/"+ video_sponsors_array[bigger_sponsor_counter] +".webm type='video/webm'></video>");
                flag_sponsor = true;
                if (myTimer) clearInterval(myTimer);
                myTimer = setInterval(function() {
                    if (flag_sponsor){
                        $(".bigger_sponsor").css("opacity", "0");
                        $(".bigger_sponsor").css("transition", "all 0.3s ease 0s").css("transform", "translateY(300px)");
                        $(".observed_container").css("transition", "all 0.3s ease 0s").css("transform", "translateY(80px)");
                        $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "0");
                        $(".observed_container>.photo_container").css("opacity", "0");
                        $(".sponsor").css("transition", "all 0.3s ease 0s").css("transform", "translateY(0px)");
                        $(".bigger_sponsor>.inner").html("");
                    }
                }, videos_length[bigger_sponsor_counter]*1000);
            }

        } else {

            $(".observed_container").css("transition", "all 0.3s ease 0s").css("transform", "translateY(80px)");
            $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "0");
            $(".observed_container>.photo_container").css("opacity", "0");
            $(".bigger_sponsor").css("opacity", "0");
            $(".bigger_sponsor").css("transition", "all 0.2s ease 0s").css("transform", "translateY(300px)");
            $(".sponsor").css("transition", "all 0.3s ease 0s").css("transform", "translateY(0px)");
            $(".bigger_sponsor>.inner").html("");
            flag_sponsor = false;
            clearInterval(myTimer);

        }
    } else if (observed) {

        menu = (data.info.player.activity == "menu");
        $(".observed_container").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(0px)");
        $(".observed_container").css("transition", "all 0.3s ease 0s").css("opacity", "1");
        $(".observed_container>.photo_container").css("opacity", "1");
        $(".bigger_sponsor").css("opacity", "0");
        $(".bigger_sponsor").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(300px)");
        $(".sponsor").css("transition", "all 0.3s ease 0.0s").css("transform", "translateY(0px)");
        $(".bigger_sponsor>.inner").html("");
        flag_sponsor = false;
        clearInterval(myTimer);
    }




    if (total_rounds < 30) {
        for (i = 0; i <= 15; i++) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
        }
    } else {
        for (i = 0; i <= 15; i++) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "none");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "none");
        }
        for (i = 1; i <= 15; i += 2) {
            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + i + ">.Result").css("background-image", "url(../../files/img/History/dot.png)");
        }
    }

    if (total_rounds < 15) {
        $(".round_text").html("Round  " + round_now + "/30");
        $(".Game_History>.History_Text>.Text").html("Game History - 1<sup>ST</sup> Half");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
    } else if (total_rounds < 30) {
        $(".round_text").html("Round  " + round_now + "/30");
        $(".Game_History>.History_Text>.Text").html("Game History - 2<sup>ND</sup> Half");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
    } else if (total_rounds < 36) {
        $(".round_text").html("Round  " + round_now + "/36");
        $(".Game_History>.History_Text>.Text").html("Game History - 1<sup>ST</sup> OVERTIME");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 42) {
        $(".round_text").html("Round  " + round_now + "/42");
        $(".Game_History>.History_Text>.Text").html("Game History - 2<sup>ND</sup> Overtime");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 48) {
        $(".round_text").html("Round  " + round_now + "/48");
        $(".Game_History>.History_Text>.Text").html("Game History - 3<sup>RD</sup> Overtime");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 54) {
        $(".round_text").html("Round  " + round_now + "/54");
        $(".Game_History>.History_Text>.Text").html("Game History - 4<sup>TH</sup> Overtime");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else if (total_rounds < 60) {
        $(".round_text").html("Round  " + round_now + "/60");
        $(".Game_History>.History_Text>.Text").html("Game History - 5<sup>TH</sup> Overtime");
        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "1");
    } else {

        $(".Game_History>.History_Bar>.Overtime_Divider").css("opacity", "0");
        $(".Game_History>.History_Text").css("opacity", "0");
        $(".Game_History>.History_Bar").css("opacity", "0");
    }


    var flag = 0;
    var z = 0;
    var y = 0;
    if (match_type !== "esea") {
        for (i = 0; i < total_rounds; i++) {
            if (total_rounds < 15) {
                nr = i + 1;
                if (nr < 15) {
                    if (round_wins[nr].startsWith('ct_')) {
                        if (round_wins[nr].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[nr].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[nr].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[nr].startsWith('t_')) {
                        if (round_wins[nr].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[nr].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                    }
                }
            } else if (total_rounds < 30) {
                nr = i + 1;
                z = nr - 15;
                if (nr >= 15) {
                    if (round_wins[nr].startsWith('ct_')) {
                        if (round_wins[nr].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[nr].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[nr].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }

                    if (round_wins[nr].startsWith('t_')) {
                        if (round_wins[nr].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[nr].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            } else if (total_rounds < 36) {
                nr = i + 1
                y = nr - 30;

                if (nr == 31) z = 1;
                if (nr == 32) z = 3;
                if (nr == 33) z = 5;
                if (nr == 34) z = 11;
                if (nr == 35) z = 13;
                if (nr == 36) z = 15;
                if (nr > 30) {
                    if (y <= 3) {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    } else {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    }
                }
            } else if (total_rounds < 42) {
                nr = i + 1
                y = nr - 36;

                if (nr == 37) z = 1;
                if (nr == 38) z = 3;
                if (nr == 39) z = 5;
                if (nr == 40) z = 11;
                if (nr == 41) z = 13;
                if (nr == 42) z = 15;
                if (nr > 36) {
                    if (y <= 3) {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    } else {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    }
                }
            } else if (total_rounds < 48) {
                nr = i + 1
                y = nr - 42;

                if (nr == 43) z = 1;
                if (nr == 44) z = 3;
                if (nr == 45) z = 5;
                if (nr == 46) z = 11;
                if (nr == 47) z = 13;
                if (nr == 48) z = 15;
                if (nr > 42) {
                    if (y <= 3) {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    } else {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    }
                }
            } else if (total_rounds < 54) {
                nr = i + 1
                y = nr - 48;

                if (nr == 49) z = 1;
                if (nr == 50) z = 3;
                if (nr == 51) z = 5;
                if (nr == 52) z = 11;
                if (nr == 53) z = 13;
                if (nr == 54) z = 15;
                if (nr > 48) {
                    if (y <= 3) {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    } else {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    }
                }
            } else if (total_rounds < 60) {
                nr = i + 1
                y = nr - 54;

                if (nr == 55) z = 1;
                if (nr == 56) z = 3;
                if (nr == 57) z = 5;
                if (nr == 58) z = 11;
                if (nr == 59) z = 13;
                if (nr == 60) z = 15;
                if (nr > 54) {
                    if (y <= 3) {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    } else {
                        if (round_wins[y].startsWith('ct_')) {
                            if (round_wins[y].startsWith('ct_win_elimination')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                            } else if (round_wins[y].startsWith('ct_win_defuse')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                            } else if (round_wins[y].startsWith('ct_win_time')) {
                                $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }

                        if (round_wins[y].startsWith('t_')) {
                            if (round_wins[y].startsWith('t_win_elimination')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                            } else if (round_wins[y].startsWith('t_win_bomb')) {
                                $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                            }
                        } else {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                        }
                    }

                }
            } else {
                $(".Game_History>.History_Text").css("opacity", "0");
                $(".Game_History>.History_Bar").css("opacity", "0");
            }
        }
    } else  {
        for (i = 0; i < total_rounds; i++) {
            if (total_rounds < 15) {
                nr = i + 1;
                if (nr < 15) {
                    if (round_wins[nr].startsWith('ct_')) {
                        if (round_wins[nr].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[nr].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[nr].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                    }
    
                    if (round_wins[nr].startsWith('t_')) {
                        if (round_wins[nr].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[nr].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + nr + ">.Result").css("background-image", "none");
                    }
                }
            } else if (total_rounds < 30) {
                nr = i + 1;
                z = nr - 15;
                if (nr > 15) {
                    if (round_wins[z].startsWith('ct_')) {
                        if (round_wins[z].startsWith('ct_win_elimination')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_death.png)");
                        } else if (round_wins[z].startsWith('ct_win_defuse')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_defuse.png)");
                        } else if (round_wins[z].startsWith('ct_win_time')) {
                            $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/ct_time.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Right_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
    
                    if (round_wins[z].startsWith('t_')) {
                        if (round_wins[z].startsWith('t_win_elimination')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_death.png)");
                        } else if (round_wins[z].startsWith('t_win_bomb')) {
                            $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "url(../../files/img/History/t_bomb.png)");
                        }
                    } else {
                        $(".Game_History>.History_Bar>.Left_Team>.Round_n" + z + ">.Result").css("background-image", "none");
                    }
                }
            } else {
                $(".Game_History>.History_Text").css("opacity", "0");
                $(".Game_History>.History_Bar").css("opacity", "0");
                $(".Game_History").css("opacity", "0");
            }
        }
    }


    $(".bo5_container>.background").css("background", "linear-gradient(to right, rgba("+left_color+",0.4) , rgba("+right_color+",0.4))");
    $(".bo5_container>.container").css("border-width", "2px");
    $(".bo5_container>.container").css("border-style", "solid");
    $(".bo5_container>.container").css("border-image","linear-gradient(to right,rgb("+left_color+") , rgb("+right_color+")) 1");


    $(".center_inner_back").css("border-top", "solid 3px rgb(255,255,255)");


    $(".center_inner_back_2").css("border-top", "solid 3px rgb(255,255,255)");

    $(".giveaway>.glow").css("border", "solid 3px rgb(255,255,255)");


    
    bigger_sponsor_background += 5;
    if(bigger_sponsor_background > 360){
        bigger_sponsor_background = 0;
    }

    // $(".bigger_sponsor").css("background", "linear-gradient("+bigger_sponsor_background+"deg, rgba("+ left_color +") 0%, rgba("+ left_color +") 10%,  rgb(0,0,0) 50% ,rgba("+ right_color +") 90%, rgb("+ right_color +") 100%)");
    // LEFT


    var left_gradient_spam = "linear-gradient(990deg, rgba(0, 0, 0, 0) 0%, rgba(" + left_color + ", 0.2) 35%, rgba(" + left_color + ", 0.2) 65%, rgba(0, 0, 0, 0) 100%)";


    $(".Progress_Bar>.Left_Team>.Background").css("background", "rgb(" + darker_left_color +")");
    $(".Progress_Bar>.Left_Team>.Progress").css("background", " linear-gradient( 90deg, rgba(" + left_color + ",1) 0%, rgba(" + left_color + ",1) 100%)");

    $(".Progress_Bar>.Right_Team>.Background").css("background", "rgb(" + darker_right_color +")");
    $(".Progress_Bar>.Right_Team>.Progress").css("background", " linear-gradient( -90deg, rgba(" + right_color + ",1) 0%, rgba(" + right_color + ",1) 100%)");



    var right_gradient_spam = "linear-gradient(990deg, rgba(0, 0, 0, 0) 0%, rgba(" + right_color + ", 0.2) 35%, rgba(" + right_color + ", 0.2) 65%, rgba(0, 0, 0, 0) 100%)";

    $(".Spam_A>.Spam_BG>.Progress").css("background", " linear-gradient( 90deg, rgba(" + dark_left_color + ",1) 0%, rgba(" + left_color + ",1) 100%)");
    $(".Spam_A>.Spam_BG>.Progress_Background").css("background", " rgb(" + darker_left_color + ")");
    $(".Spam_B>.Spam_BG>.Progress").css("background", " linear-gradient( -90deg, rgba(" + dark_right_color + ",1) 0%, rgba(" + right_color + ",1) 100%)");
    $(".Spam_B>.Spam_BG>.Progress_Background").css("background", " rgb(" + darker_right_color + ")");
    // $(".Spam_A>.Spam_SM>.Text_Box").css("background", " linear-gradient( 90deg, rgba(" + dark_left_color + ",1) 0%, rgba(" + left_color + ",1) 100%)");
    // $(".Spam_B>.Spam_SM>.Text_Box").css("background", " linear-gradient( 90deg, rgba(" + dark_right_color + ",1) 0%, rgba(" + right_color + ",1) 100%)");

    $(".LossBonus_A>.Upper_Container").css("background", " linear-gradient( 90deg, rgba(" + dark_left_color + ",1) 0%, rgba(" + left_color + ",1) 100%)");
    $(".LossBonus_B>.Upper_Container").css("background", " linear-gradient( 90deg, rgba(" + dark_right_color + ",1) 0%, rgba(" + right_color + ",1) 100%)");

    $(".topbar_i_counter>.player_count_left>.left_count").css("background", "-webkit-linear-gradient(90deg, rgba(" + left_color + ",1) , rgba(" + left_color + ",1) )");
    $(".topbar_i_counter>.player_count_left>.left_count").css("-webkit-background-clip", "text");
    $(".topbar_i_counter>.player_count_left>.left_count").css("-webkit-text-fill-color", "transparent");

    $(".topbar_i_counter>.player_count_right>.right_count").css("background", " -webkit-linear-gradient( 90deg,rgba(" + right_color + ",1) , rgba(" + right_color + ",1))");
    $(".topbar_i_counter>.player_count_right>.right_count").css("-webkit-background-clip", "text");
    $(".topbar_i_counter>.player_count_right>.right_count").css("-webkit-text-fill-color", "transparent");




    if (teams.left.score > 9) {
        $(".left_score").html(teams.left.score);
    } else {
        $(".left_score").html(teams.left.score);
    }

    if (teams.right.score > 9) {
        $(".right_score").html(teams.right.score);
    } else {
        $(".right_score").html(teams.right.score);
    }


    // Update Molo Spam


    if (teams.left.side == "ct") {
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_CTMolo.png")');
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "12px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "1px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "13px");


        
    } else if (teams.left.side == "t") {
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_TMolo.png")');
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "21px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "0px");
        $(".Spam_A > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "10px");



    }

    if (teams.right.side == "ct") {
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_CTMolo.png")');
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "12px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "1px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "13px");

;
        

    } else if (teams.right.side == "t") {
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css('background-image', 'url("../../files/img/Icons/Icons/Utility_TMolo.png")');
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("background-size", "21px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("top", "0px");
        $(".Spam_B > .Spam_BG > .Bottom_Spam > .Inc > .Inc_Icon ").css("left", "10px");


    }

    // Update Logos

    if (teams.left.logo) {
        $(".left_logo_container > .logo").css('background-image', 'url("/teams/' + teams.left.logo + '")');
        $("#team_1 #team_logo").removeClass("empty");
 
    } else {
        var team_left_just_letter = teams.left.name;
        team_left_just_letter = team_left_just_letter[0];
        if (teams.left.side == "t") {
            $(".left_logo_container > .logo").css('background-image', 'url(../../files/img/t.png)');
        } else {
            $(".left_logo_container > .logo").css('background-image', 'url(../../files/img/ct.png)');
        }

    }
    if (teams.right.logo) {
            $(".right_logo_container > .logo").css('background-image', 'url("/teams/' + teams.right.logo + '")');
            $("#team_2 #team_logo").removeClass("empty");
    } else {
        var team_right_just_letter = teams.right.name;
        team_right_just_letter = team_right_just_letter[0];
        if (teams.right.side == "t") {
            $(".right_logo_container > .logo").css('background-image', 'url(../../files/img/t.png)');
        } else {
            $(".right_logo_container > .logo").css('background-image', 'url(../../files/img/ct.png)');
        }

    }

    //EVERY OTHER PLAYER
    if (players) {

        var offset = 0;
        for (var sl in players) {
            let player = players[sl];
            if (avatars[player.steamid] != true && disp_avatars)
                loadAvatar(player.steamid);

            if (player.observer_slot <= 5 && offset == 0 && player.team.toLowerCase() != teams.left.side)
                offset = 6 - sl;
        }
        fillPlayers(teams);

    }

    //OBSERVED PLAYER

    if (observed && observed.steamid != 1 && observed.getStats()) {
        fillObserved(observed);
    }


    //PHASESc
    if (phase) {
        $(".time").css("color", (phase.phase == "live" || phase.phase == "over" || phase.phase == "warmup" || (phase.phase == "freezetime" && phase.phase_ends_in > 10)) ?
            "rgb(255, 255, 255)" :
            "rgb(" + warning + ")");

        function startAnimationDefuse(name, side, long) {

            if (data.info.bomb.countdown > 0.1) {
                defuse_countdown = data.info.bomb.countdown - 0.18;
            } else if (data.info.bomb.countdown <= 0.18) {
                defuse_countdown = 0.0;
            }

            if (defuse_countdown < 0.1) {
                $(".bomb").html("");
                $(".bomb").css("animation", "");
            }
            progress_width = defuse_countdown * 100 / 10 + "%";
            $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");

            if ($(".Progress_Bar>.Center_Bar").hasClass("longd")) {

                if (data.info.bomb.countdown < 9.80) {
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                    if (side == "left") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("left", "");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(defuse_name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        // $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0.8").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Left_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    } else {
                        $(".Progress_Bar>.Right_Team>.Progress").css("right", "");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(defuse_name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        // $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0.8").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    }
                }
            } else {

                if (data.info.bomb.countdown < 4.80) {
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                    if (side == "left") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("left", "");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        // $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Left_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");

                    } else {
                        $(".Progress_Bar>.Right_Team>.Progress").css("right", "");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        // $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");

                    }
                } else if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "Defusing Bomb") {
                    if (side == "left") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("left", "");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Left_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");

                    } else {
                        $(".Progress_Bar>.Right_Team>.Progress").css("right", "");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        var defuse_name = name;
                        if (defuse_name.length > 13) defuse_name = defuse_name.substring(0, 13);
                        $(".Progress_Bar>.Center_Bar>.Player_Txt").html(name);
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Defusing Bomb");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ ct_color +")");
                        $(".Progress_Bar>.Center_Bar>.BackgroundImage").css("background-image" , "url(../../files/img/DefuseKit_Img.png");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", progress_width).css("transition", "all 0.4s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");

                    }
                }
            }

        }


        function stopAnimationDefuse() {

                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "Defusing Bomb") {
                    if (teams.left.side == "ct") {
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Left_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                    } else if (teams.right.side == "ct") {
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                    }
                }
        }

        function startAnimationPlanting(name, side) {

            var countdown = parseFloat(3.2) - parseFloat(data.info.bomb.countdown);
            countdown = countdown.toFixed(1);
            var progress_width = countdown * 100 / 3 + "%";

                if (side == "left") {
                    $(".Progress_Bar>.Left_Team>.Progress").css("left", "20px");
                    var plant_name = name;
                    if (plant_name.length > 13) plant_name = plant_name.substring(0, 13);
                    $(".Progress_Bar>.Center_Bar>.Player_Txt").html(plant_name);
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Planting Bomb");
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ t_color +")");
                    $(".Progress_Bar>.Left_Team").css("opacity", "1").css("transition", "opacity 0.4s ease 0s");
                    $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.4s ease 0.1s");
                    $(".Progress_Bar>.Left_Team>.Progress").css("left", "20px");
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "100%").css("transition", "all 3.3s linear 0s");
                    $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    $(".Progress_Bar>.Left_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    $(".Progress_Bar>.Left_Team>.Progress>.Number").html(1);
                } else {
                    $(".Progress_Bar>.Right_Team>.Progress").css("right", "20px");
                    var plant_name = name;
                    if (plant_name.length > 13) plant_name = plant_name.substring(0, 13);
                    $(".Progress_Bar>.Center_Bar>.Player_Txt").html(plant_name);
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Planting Bomb");
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color", "rgb("+ t_color +")");
                    $(".Progress_Bar>.Right_Team").css("opacity", "1").css("transition", "opacity 0.4s ease 0s");
                    $(".Progress_Bar>.Center_Bar").css("opacity", "1").css("transition", "opacity 0.4s ease 0.1s");
                    $(".Progress_Bar>.Right_Team>.Progress").css("right", "20px");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "100%").css("transition", "all 3.3s linear 0s");
                    $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(0px)");
                    $(".Progress_Bar>.Right_Team>.Progress>.Number").html(1);
                }
            
        }

        function stopAnimationPlanting() {

            setTimeout(function() {
                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "Planting Bomb") {
                    if (teams.left.side == "t") {
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Left_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                    } else if (teams.right.side == "t") {
                        $(".Progress_Bar>.Center_Bar").css("opacity", "0").css("transition", "opacity 0.8s ease 0.3s");
                        $(".Progress_Bar>.Right_Team").css("opacity", "0").css("transition", "opacity 0.5s ease 0s");
                        $(".Progress_Bar>.Center_Bar>.Center_Txt").html(" ");
                        $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                        $(".Progress_Bar>.Center_Bar").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                        $(".Progress_Bar>.Right_Team").css("transition", "transform 0.5s ease-out 0s").css("transform", "translateY(-30px)");
                    }
                }
            }, 200);

        }

        if (data.info.bomb.state == "planting") {

            var plantador;

            if (players) {

                var offset = 0;
                for (var sl in players) {
                    let player = players[sl];
                    if (player.steamid == data.info.bomb.player)
                        plantador = player.name;
                }
            }

            if (teams.left.side == "t") {
                if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
                    plantador = plantador.slice(letters);
                } 
                startAnimationPlanting(plantador, "left");
            } else if (teams.right.side == "t") {
                if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
                    plantador = plantador.slice(letters);
                } 
                startAnimationPlanting(plantador, "right");

            }


        } else {
            stopAnimationPlanting();
        }



        if (phase.phase == "bomb" || phase.phase == "defuse") {
            if (phase.phase == "bomb") {
                bomb(parseFloat(phase.phase_ends_in));
            }

            if (data.info.bomb.state == "defusing") {

                var defuser;
                var long;

                if (players) {

                    var offset = 0;
                    for (var sl in players) {
                        let player = players[sl];
                        if (player.steamid == data.info.bomb.player)
                            defuser = player.name;
                    }
                }


                if (teams.left.side == "ct") {
                    if (left_name_team.toUpperCase() !== "THE PRODIGIES -") {
                        defuser = defuser.slice(letters);
                    } 
                    if (data.info.bomb.countdown > 6.1) {
                        $(".Progress_Bar>.Center_Bar").addClass("longd");
                        startAnimationDefuse(defuser, "left");
                    } else {
                        $(".Progress_Bar>.Center_Bar").removeClass("longd");
                        startAnimationDefuse(defuser, "left");
                    }
                } else if (teams.right.side == "ct") {
                    if (right_name_team.toUpperCase() !== "THE PRODIGIES -") {
                        defuser = defuser.slice(letters);
                    } 
                    if (data.info.bomb.countdown > 6.1) {
                        $(".Progress_Bar>.Center_Bar").addClass("longd");
                        startAnimationDefuse(defuser, "right");
                    } else {
                        $(".Progress_Bar>.Center_Bar").removeClass("longd");
                        startAnimationDefuse(defuser, "right");
                    }

                }

            } else {
                stopAnimationDefuse();
            }

        } else {
            resetBomb();
            stopAnimationDefuse();
            stopAnimationDefuse();
        }

        if (data.info.bomb.state == "defused") {
            stopAnimationDefuse();
        }

        let win = round.win_team;

        var rightside = teams.right.side;
        rightside = rightside.toUpperCase();

        var leftside = teams.left.side;
        leftside = leftside.toUpperCase();

        //WINNER ANIMATION

        function startAnimationWinner(side, name, gameside) {

            if (side == "left") {
                $(".Win_container>.win_container_left").css("transform", "translateX(0px)").css("transition", "all 0.6s ease 0.1s");
                $(".Win_container>.win_container_left").css("opacity", "1");
                // $(".win_text_left").css("opacity", "1").css("transition", "all 0.4s ease 0s");
            } else if (side == "right") {
                $(".Win_container>.win_container_right").css("transform", "translateX(0px)").css("transition", "all 0.6s ease 0.1s");
                $(".Win_container>.win_container_right").css("opacity", "1");
                // $(".win_text_right").css("opacity", "1").css("transition", "all 0.4s ease 0s");
            }

        }

        function stopAnimationWinner() {

            $(".Win_container>.win_container_left").css("transform", "translateY(-35px)").css("transition", "all 0.8s ease 0.4s");
            $(".Win_container>.win_container_right").css("transform", "translateY(-35px)").css("transition", "all 0.8s ease 0.4s");
            $(".Win_container>.win_container_left").css("opacity", "0");
            $(".Win_container>.win_container_right").css("opacity", "0");
            $(".win_text_right").css("opacity", "0").css("transition", "all 1s ease 0.6s");
            $(".win_text_left").css("opacity", "0").css("transition", "all 1s ease 0.6s");
        }

        // SHOW SPAM & FIREPOWER

        function showBO(){
            $(".bo5_container").removeClass("hide_bo_container").addClass("show_bo_container");
        }
        function hideBO(){
            $(".bo5_container").removeClass("show_bo_container").addClass("hide_bo_container");
        }

        function showSpam() {
            $(".Spam_A>.Spam_BG").removeClass("hide_spam_left").addClass("show_spam");
            $(".Spam_B>.Spam_BG").removeClass("hide_spam_right").addClass("show_spam");
            $(".Spam_A>.Spam_SM").removeClass("hide_spam_left").addClass("show_spam");
            $(".Spam_B>.Spam_SM").removeClass("hide_spam_right").addClass("show_spam");
        }

        function UpSponsors() {
            $(".side_right_sponsor").css("transform", "transform: translateY(-75px)").css("transition", "all 0.6s ease 0.1s");
            $(".side_left_sponsor").css("transform", "transform: translateY(-75px)").css("transition", "all 0.6s ease 0.1s");
        }

        function DownSponsors() {
            $(".side_right_sponsor").css("transform", "transform: translateY(0px)").css("transition", "all 1.1s ease 0.7s");
            $(".side_left_sponsor").css("transform", "transform: translateY(0px)").css("transition", "all 1.1s ease 0.7s");
        }

        function hideSpam() {
            $(".Spam_A>.Spam_BG").removeClass("show_spam").addClass("hide_spam_left");
            $(".Spam_B>.Spam_BG").removeClass("show_spam").addClass("hide_spam_right");
            $(".Spam_A>.Spam_SM").removeClass("show_spam").addClass("hide_spam_left");
            $(".Spam_B>.Spam_SM").removeClass("show_spam").addClass("hide_spam_right");
        }

        function showGiveaway() {
            $(".giveaway").removeClass("hide_giveaway").addClass("show_giveaway");
        }

        function hideGiveaway() {
            $(".giveaway").removeClass("show_giveaway").addClass("hide_giveaway");
        }


        function showBonus() {
            $(".LossBonus_A").removeClass("hide_spam_left").addClass("show_spam");
            $(".LossBonus_B").removeClass("hide_spam_right").addClass("show_spam");
            $(".Team_A").removeClass("hide_bonus_right").addClass("show_bonus");
            $(".Team_B").removeClass("hide_bonus_left").addClass("show_bonus");
            // $(".Game_History").css("transition", "all 1s ease-out 0.5s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Text").css("transition", "all 0.5s ease 0s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Text").css("opacity", "1");
            $(".Game_History>.History_Bar").css("transition", "all 0.6s ease 0.5s").css("transform", "translate(0px, 0px)");
            $(".Game_History>.History_Bar").css("opacity", "1");
        }

        function hideBonus() {
            $(".LossBonus_A").removeClass("show_spam").addClass("hide_spam_left");
            $(".LossBonus_B").removeClass("show_spam").addClass("hide_spam_right");
            $(".Team_A").removeClass("show_bonus").addClass("hide_bonus_right");
            $(".Team_B").removeClass("show_bonus").addClass("hide_bonus_left");
            $(".Game_History>.History_Text").css("transition", "all 1.1s ease 0.6s").css("transform", "translate(0px, -85px)");
            $(".Game_History>.History_Text").css("opacity", "0");
            $(".Game_History>.History_Bar").css("transition", "all 0.6s ease 0.4s").css("transform", "translate(0px, -85px)");
            $(".Game_History>.History_Bar").css("opacity", "0");
        }


        function showPickem() {
            $(".MapPick_BG").removeClass("hide_pickem").addClass("show_pickem");
            $(".topbar_i_counter").css("opacity", "0").css("transition", "all 0.5s ease 0s");
        }

        function hidePickem() {
            $(".MapPick_BG").removeClass("show_pickem").addClass("hide_pickem");
            $(".topbar_i_counter").css("opacity", "1").css("transition", "all 1.3s ease 0.8s");
        }

        function showPickem_1() {
            $(".MapPick_BG>.Map2").removeClass("hide_pickem_1").addClass("show_pickem_1");
        }

        function hidePickem_1() {
            $(".MapPick_BG>.Map2").removeClass("show_pickem_1").addClass("hide_pickem_1");
        }

        function showPickem_2() {
            $(".MapPick_BG>.Map3").removeClass("hide_pickem_2").addClass("show_pickem_2");
        }

        function hidePickem_2() {
            $(".MapPick_BG>.Map3").removeClass("show_pickem_2").addClass("hide_pickem_2");
        }

        function showFirePower() {
            $(".firepower").removeClass("hide_firepower").addClass("show_firepower");
            $(".header_container>.team_equip_right").css("opacity", "1");
            $(".header_container>.team_money_right").css("opacity", "1");
            $(".header_container>.team_equip_left").css("opacity", "1");
            $(".header_container>.team_money_left").css("opacity", "1");
            $(".header_container>.team_equip_right").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_money_right").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_equip_left").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            $(".header_container>.team_money_left").css("transition", "all 0.5s ease-out 0s").css("transform", "translate(0px, 0px)");
            // $(".header_container>.left_name").css("opacity", "0");
            // $(".header_container>.right_name").css("opacity", "0");
            if (flag == 0) {
                $(".round_winner").removeClass("hide_round_winner").addClass("show_round_winner");
            }
        }

        function hideFirePower() {
            $(".header_container>.left_name").css("opacity", "1");
            $(".header_container>.right_name").css("opacity", "1");
            $(".firepower").removeClass("show_firepower").addClass("hide_firepower");
            $(".header_container>.team_equip_right").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(-74px, 0px)");
            $(".header_container>.team_money_right").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(74px, 0px)");
            $(".header_container>.team_equip_left").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(74px, 0px)");
            $(".header_container>.team_money_left").css("transition", "all 1.375s ease 0.875s").css("transform", "translate(-74px, 0px)");
            $(".header_container>.team_equip_right").css("opacity", "0");
            $(".header_container>.team_money_right").css("opacity", "0");
            $(".header_container>.team_equip_left").css("opacity", "0");
            $(".header_container>.team_money_left").css("opacity", "0");
            if (flag == 0) {
                $(".round_winner").removeClass("show_round_winner").addClass("hide_round_winner");
            }
            // $(".Game_History").removeClass("hide_history").addClass("show_history");
        }






        if (map.phase == "intermission" || map.phase == "warmup" || map.phase == "gameover") {
            stopAnimationWinner();
        }

        if (round.phase == "over") {
            if (phase.phase_ends_in > 1) {

                if (win == rightside) {
                    startAnimationWinner("right", teams.right.name, teams.right.side);
                } else if (win == leftside) {
                    startAnimationWinner("left", teams.left.name, teams.left.side);
                }
            } else {
                stopAnimationWinner();
            }

        } else {
            stopAnimationWinner();
        }


        if (phase.phase == "freezetime") {

            stopAnimationWinner();
            if (phase.phase_ends_in > 1) {
                UpSponsors();
                showSpam();
                showBonus();
                hideBO();
                if (bo == 1) {
                    //showPickem();
                    //$(".MapPick_BG>.Map1").css("opacity", "0");
                    //$(".MapPick_BG>.Map2").css("opacity", "0");
                } else if (bo == 3) {
                    showPickem_1();
                    showPickem_2();
                    showPickem();
                }
                showFirePower();
                hideGiveaway();
            } else {
                UpSponsors();
                showSpam();
                hideBonus();
                if (bo == 1) {
                    //hidePickem();
                } else if (bo == 3) {
                    hidePickem_1();
                    hidePickem_2();
                    hidePickem();
                }
                if ((round_now % 3) == 0) {
                    showGiveaway();
                }
                hideFirePower();
                showBO();
            }

        }

        if (phase.phase == "live" && phase.phase !== "bomb") {
            if (phase.phase_ends_in > 104) {
                if ($(".Spam_A>.Spam_BG").css("opacity") == 0 && $(".Spam_B>.Spam_BG").css("opacity") == 0) {
                    UpSponsors();
                    showSpam();
                    showGiveaway();
                    // showTeamName();
                }
            } else {
                if ($(".Spam_A>.Spam_BG").css("opacity") == 1 && $(".Spam_B>.Spam_BG").css("opacity") == 1) {
                    hideGiveaway();
                    DownSponsors();
                    hideSpam();
                    // hideTeamName();
                }
            }
        }



        if (phase.phase == "bomb" && bomb_time > "30") {
            UpSponsors();
            showSpam();
        } else if (phase.phase == "bomb" && phase.phase_ends_in < 30 && ($(".spam > .left_container").css("opacity") == 1 && $(".spam > .right_container").css("opacity") == 1)) {
            hideSpam();
            DownSponsors();
        }

        if (phase.phase == "over") {
            hideSpam();
            DownSponsors();
        }

        var pause_now_left = 4 - teams.left.timeouts;
        var pause_now_right = 4 - teams.right.timeouts;;

        // Update Timer

        if (phase.phase_ends_in) {

            function startAnimationPause(remaining, side) {

                hideFirePower();

                var progress_width = phase.phase_ends_in * 100 / 30 + "%";

                $(".Top_Bar>.Timer_BG>.Timer").text(count_minute + ":" + count_seconds);

                if (side == "left") {
                    $(".Pause_container>.Pause_Left>.Pause_Text").html("Tactical Pause");
                    $(".Pause_container>.Pause_Left>.Pause_Text").css("color", "rgb("+left_color+")");

                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_2").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_3").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_4").css("background", "rgb(100,100,100)");
                    
                    if (pause_now_left == 1) {
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb("+left_color+")");
                    } else if (pause_now_left == 2) {
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_2").css("background", "rgb("+left_color+")");
                    } else if (pause_now_left == 3) {
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_2").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_3").css("background", "rgb("+left_color+")");
                    } else if (pause_now_left == 4) {
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_1").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_2").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_3").css("background", "rgb("+left_color+")");
                        $(".Pause_container>.Pause_Left>.Lower_container>.pause_4").css("background", "rgb("+left_color+")");
                    }
                    $(".Pause_container>.Pause_Left").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translate(0px, 0px)");
                    $(".Game_History").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");
                    $(".Team_A").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");
                    $(".Team_B").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");

                } else if (side == "right") {
                    $(".Pause_container>.Pause_Right>.Pause_Text").html("Tactical Pause");
                    $(".Pause_container>.Pause_Right>.Pause_Text").css("color" , "rgb("+right_color+")");

                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_2").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_3").css("background", "rgb(100,100,100)");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_4").css("background", "rgb(100,100,100)");
                    
                    if (pause_now_right == 1) {
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb("+right_color+")");
                    } else if (pause_now_right == 2) {
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_2").css("background", "rgb("+right_color+")");
                    } else if (pause_now_right == 3) {
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_2").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_3").css("background", "rgb("+right_color+")");
                    } else if (pause_now_right == 4) {
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_1").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_2").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_3").css("background", "rgb("+right_color+")");
                        $(".Pause_container>.Pause_Right>.Lower_container>.pause_4").css("background", "rgb("+right_color+")");
                    }
                    $(".Pause_container>.Pause_Right").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translate(0px, 0px)");
                    $(".Game_History").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");
                    $(".Team_A").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");
                    $(".Team_B").css("transition", "all 0.6s ease-out 0.3s").css("transform", "translateY(10px)");
                }
            }

            function stopAnimationPause(side) {
                        // $(".Pause_container>.Pause_Left").css("transition", "opacity 0.8s ease 0.5s").css("opacity", "0");
                        $(".Pause_container>.Pause_Left").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translateY(-45px)");
                        $(".Pause_container>.Pause_Right").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translateY(-45px)");
                        $(".Game_History").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translateY(0px)");
                        $(".Team_A").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translateY(0px)");
                        $(".Team_B").css("transition", "all 0.8s ease-out 0.5s").css("transform", "translateY(0px)");
            }

            var countdown = Math.abs(Math.ceil(phase.phase_ends_in));
            var count_minute = Math.floor(countdown / 60);
            var count_seconds = countdown - (count_minute * 60);
            let bomb_active = false;
            if (count_seconds < 10) {
                count_seconds = "0" + count_seconds;
            }

            if (phase.phase == "bomb" && bomb_time > "9" || phase.phase == "defuse") {
                $(".time").html("");
                var progressbomb_time = bomb_time * 100 / 40;
                progressbomb_time = progressbomb_time + "%";
                bomb_active = true;
                if (phase.phase !== "defuse") {
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").html("Bomb Planted");
                    $(".Progress_Bar>.Center_Bar>.Center_Txt").css("color" , "rgb(" + t_color + ")");
                }
                if ($(".Progress_Bar>.Center_Bar>.Center_Txt").text() == "Bomb Planted") {
                    if (teams.left.side == "t") {
                        $(".Progress_Bar>.Left_Team>.Progress").css("left", "");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        $(".header_container>.round_container").css("opacity", "0");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1");
                        $(".Progress_Bar>.Left_Team").css("opacity", "1");
                        $(".Progress_Bar>.Center_Bar").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Left_Team").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Left_Team>.Progress").css("right", "20px");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", "0px").css("transition", "width 40s linear 0s");
                        $(".header_container>.bomb_countdown_container>.bomb").css("animation", "pulseA 40s ease-in-out forwards"); 
                        $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease-out 0s").css("opacity", "1");
                    } else if (teams.right.side == "t") {
                        $(".Progress_Bar>.Right_Team>.Progress").css("right", "");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        $(".header_container>.round_container").css("opacity", "0");
                        $(".Progress_Bar>.Center_Bar").css("opacity", "1");
                        $(".Progress_Bar>.Right_Team").css("opacity", "1");
                        $(".Progress_Bar>.Center_Bar").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Right_Team").css("transform", "translateY(0px)");
                        $(".Progress_Bar>.Right_Team>.Progress").css("left", "20px");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", "0px").css("transition", "width 40s linear 0s");
                        $(".header_container>.bomb_countdown_container>.bomb").css("animation", "pulseA 40s ease-in-out forwards"); 
                        $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease-out 0s").css("opacity", "1");
                    }
                }
            } else if (phase.phase == "bomb" && bomb_time <= "9.99999" && bomb_time >= "0") {
                $(".time").html("");
                var progressbomb_time = bomb_time * 100 / 40 + "%";

            } else if (phase.phase == "paused" || phase.phase == "timeout_ct" || phase.phase == "timeout_t") {
                $(".header_container>.round_container").css("opacity", "1");
                stopAnimationWinner();
                $(".header_container>.bomb_countdown_container>.bomb").css("animation", "");
                $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "0px");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "0px");
                }
                $(".time").text(count_minute + ":" + count_seconds);

                $(".time").css("animation", "");
                if (phase.phase == "timeout_ct" || phase.phase == "timeout_t") {
                    if (phase.phase == "timeout_ct") {
                        if (teams.left.side == "ct") {
                            startAnimationPause(pause_now_left, "left");
                        } else if (teams.right.side == "ct") {
                            startAnimationPause(pause_now_right, "right");
                        }
                    } else if (phase.phase == "timeout_t") {
                        if (teams.left.side == "t") {
                            startAnimationPause(pause_now_left, "left");
                        } else if (teams.right.side == "t") {
                            startAnimationPause(pause_now_right, "right");
                        }
                    }
                } else {
                    $(".time").text("PAUSE");
                    $(".time").css("animation", "");
                    stopAnimationPause();
                    stopAnimationWinner();
                    hideBonus();
                    showGiveaway();
                }
            } else {
                $(".header_container>.round_container").css("opacity", "1");
                $(".header_container>.bomb_countdown_container>.bomb").css("animation", "");
                $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                $(".header_container>.bomb_countdown_container").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Left_Team>.Progress").css("width", "0px");
                    $(".Progress_Bar>.Right_Team>.Progress").css("width", "0px");
                }
                $(".time").text(count_minute + ":" + count_seconds);
                $(".Progress_Bar>.Left_Team>.Progress").html("");

                stopAnimationPause();

                if (data.info.bomb.state !== "planting") {
                    $(".Progress_Bar>.Center_Bar").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Left_Team").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Right_Team").css("transition", "opacity 0.5s ease 0s").css("opacity", "0");
                    $(".Progress_Bar>.Center_Bar").css("background-image" , "");
                }

                if (data.info.bomb.state !== "planting") {
                    if (teams.left.side == "t") {
                        // $(".Progress_Bar>.Left_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    } else {
                        // $(".Progress_Bar>.Right_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    }
                    if (teams.left.side == "ct") {
                        // $(".Progress_Bar>.Left_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Left_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    } else {
                        // $(".Progress_Bar>.Right_Team>.Progress").css("transform", "translate(0px, 0px)");
                        $(".Progress_Bar>.Right_Team>.Progress").css("width", "0%").css("transition", "all 0.4s ease 0s");
                    }
                }

                if (map.phase == "warmup") {
                    $(".time").text("WARMUP");
                    $(".time").css("animation", "");
                    stopAnimationPause();
                    stopAnimationWinner();
                    $(".header_container>.bomb_countdown_container>.background").css("height", "66px");
                    $(".header_container>.bomb_countdown_container>.background").css("height", "100%");
                }
            }

        }

    }
    freezetime = round.phase == "freezetime";
    last_round = round_now;

}