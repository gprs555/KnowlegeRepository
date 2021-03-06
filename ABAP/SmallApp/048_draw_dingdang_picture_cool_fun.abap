REPORT ZTEST21.
DATA: BEGIN OF hpgl OCCURS 1,
        entry(128),
      END OF hpgl.

DEFINE add_command.
  hpgl = &1.
  append hpgl.
END-OF-DEFINITION.

add_command:
" border
'SP0;PU;',
'PA0,0;PD;PA360,0;PA360,420;PA0,420;PA0,0;PU;',

" face
'SP2;FT1;',
'PA180,270;',
'WG120,0,360;',
'SP1;',
'CI120;',
'SC0,1.0,0,0.8,2;',
'SP0;FT1;',
'PA180,300;',
'WG100,0,360;',
'SP1;',
'CI100;',
'SC0,1.0,0,1.0,2;',

" eyes
'SC0,0.6,0,0.7,2;',
'SP0;FT1;',
'PA250,450;',
'WG50,0,360;',
'SP1;',
'CI50;',
'SP0;FT1;',
'PA350,450;',
'WG50,0,360;',
'SP1;',
'CI50;',
'SC0,0.5,0,0.7,2;',
'SP1;FT1;',
'PA300,433;',
'WG10,0,360;',
'PA400,433;',
'WG10,0,360;',
'SC0,1.0,0,1.0,2;',

" nose
'SP6;FT1;',
'PA180,282;',
'WG12,0,360;',
'SP1;',
'CI12;',
'SP0;FT1;',
'PA185,285;',
'WG5,0,360;',

" mouth
'SP1;',
'PA180,270;PD;',
'PA180,200;PU;',
'SC180,1.333,260,1,2;',
'AA180,260,60;',
'SC0,1,0,1,2;',
'PA180,200;',
'SC180,1.333,260,1,2;',
'AA180,260,-60;',
'SC0,1,0,1,2;',
'PA100,270;PD;',
'PA150,260;PU;',
'PA260,270;PD;',
'PA210,260;PU;',
'PA95,250;PD;',
'PA150,250;PU;',
'PA265,250;PD;',
'PA210,250;PU;',
'PA100,230;PD;',
'PA150,240;PU;',
'PA260,230;PD;',
'PA210,240;PU;',

" body
'SP2;FT1;',
'PA105,38;RR150,132;',
'SP0;FT1;',
'PA180,130;WG60,0,360;',
'SP1;',
'PA180,70;PD;AA180,130,130;PU;',
'PA180,70;PD;AA180,130,-130;PU;',

" neck
'SP6;FT1;',
'PA107,168;WG7,0,360;',
'SP1;',
'CI7;',
'SP6;FT1;',
'PA253,168;WG7,0,360;',
'SP1;',
'CI7;',
'SP6;FT1;',
'PA105,175;',
'RR150,-14;',
'SP1;',
'PA105,175;PD;',
'PA255,175;PU;',
'PA105,161;PD;',
'PA255,161;PU;',

" bell
'SP3;FT1;',
'PA180,155;',
'WG15,0,360;',
'SP1;',
'CI15;',
'PA170,163;PD;',
'PA190,163;PU;',
'PA167,160;PD;',
'PA193,160;PU;',
'PA180,144;PD;',
'PA180,141;PU;',
'SC0,5,0,4,2;',
'PA36,37;PU;',
'WG1,0,360;',
'SC0,1,0,1,2;',

" pocket
'PA180,121;',
'SC0,35,0,39,2;',
'EW1,180,180;',
'SC0,1,0,1,2;',

" legs
'SP0;FT1;',
'PA180,38;WG12,0,180;',
'SP1;',
'PA192,38;PD;',
'AA180,38,180;PU;',
'PA137,38;',
'SC0,42,0,12,2;',
'SP0;FT1;',
'WG1,0,360;',
'SP1;',
'CI1;',
'SC0,1,0,1,2;',
'PA223,38;',
'SC0,42,0,12,2;',
'SP0;FT1;',
'WG1,0,360;',
'SP1;',
'CI1;',
'SC0,1,0,1,2;',

" hands
'PA104,161;',
'PM0;PR-45,21,0,-32,45,-21;',
'SP2;FP1;',
'FP;',
'SP1;',
'EP;',
'PM2;',
'PA58,164;',
'SP0;FT1;WG20,0,360;',
'SP1;CI20;',
'PA256,161;',
'PM0;PR45,-21,0,-32,-45,21;',
'SP2;FP1;',
'FP;',
'SP1;',
'EP;',
'PM2;',
'PA300,123;',
'SP0;FT1;WG20,0,360;',
'SP1;CI20;',

" misc
'PA105,140;PD;PA104,48;PU;',
'PA255,140;PD;PA256,48;PU;'.

CALL FUNCTION 'GRAPH_HPGL'
  TABLES
    data   = hpgl.