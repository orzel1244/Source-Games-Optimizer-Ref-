var connection;
var sprays;
var shadows;
var facial;
var ragdolls;
var gibs;
var sky3d;
var rope;
var commands = [
    "cl_cmdrate 66\ncl_interp 0\ncl_interp_ratio 1\ncl_lagcompensation 1\ncl_pred_optimize 2\ncl_smooth 0\ncl_smoothtime 0.01\ncl_updaterate 66\n",
    "cl_cmdrate 40\ncl_interp 0\ncl_interp_ratio 2\ncl_lagcompensation 1\ncl_pred_optimize 2\ncl_smooth 0\ncl_smoothtime 0.01\ncl_updaterate 40\n",
    "cl_playerspraydisable \"1\"\nr_spray_lifetime \"0\"\n",
    "mat_shadowstate \"0\"\nr_shadows \"1\"\nr_flashlightdepthtexture \"1\"\nr_shadowrendertotexture \"0\"\n",
    "r_eyes \"0\"\nr_flex \"0\"\nr_lod \"2\"\nr_rootlod \"2\"\nr_teeth \"0\"\n",
    "cl_ragdoll_fade_time \"0\"\ncl_ragdoll_forcefade 1\ncl_ragdoll_physics_enable \"0\"\ng_ragdoll_fadespeed \"0\"\ng_ragdoll_lvfadespeed \"0\"\nragdoll_sleepaftertime \"0\"\n",
    "cl_phys_props_enable \"0\"\ncl_phys_props_max \"0\"\nprops_break_max_pieces \"0\"\nr_propsmaxdist \"1\"\nviolence_agibs \"0\"\nviolence_hgibs \"0\"\n",
    "r_3dsky \"0\"\n",
    "rope_averagelight \"0\"\nrope_collide \"0\"\nrope_rendersolid \"0\"\nrope_shake \"0\"\nrope_smooth \"0\"\nrope_subdiv \"0\"\nrope_wind_dist \"0\"\n"
];


var code = "";

function assignVars() {
    connection = connection_switch.checked;
    sprays = sprays_switch.checked;
    shadows = shadows_switch.checked;
    facial = facial_switch.checked;
    ragdolls = ragdolls_switch.checked;
    gibs = gibs_switch.checked;
    sky3d = sky3d_switch.checked;
    rope = rope_switch.checked;
}

function setCode(){
    code = ""
    if(connection){
        code += commands[0];
    }
    else{
        code += commands[1];
    }
    if(!sprays){
        code += commands[2];
    }
    if(!shadows){
        code += commands[3];
    }
    if(!facial){
        code += commands[4];
    }
    if(!ragdolls){
        code += commands[5];
    }
    if(!gibs){
        code += commands[6];
    }
    if(!sky3d){
        code += commands[7];
    }
    if(!rope){
        code += commands[8];
    }

    code += "echo Generated by orzel1244";
    codeArea.code = code;
}
