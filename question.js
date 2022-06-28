$(function () {
  var array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var question = $("#question"), //질문, 긍정, 부정
    yes = $("#yes"),
    no = $("#no");
  var count = 0, //현재 페이지의 index
    flag = 0;
  var i = 0,
    ff = 0;

  var introverted = 0,
    extroverted = 0, //내향, j, 팀 여부
    jCount = 0,
    pCount = 0,
    teamCount = 0,
    personalCount = 0;

  {
    var question = [
      "입학 후 첫 수업날 강의실에 일찍 도착했다! 그런데... 모르는 사람과 단 둘이 옆자리에 앉아 서로 눈치만 보고 있는 상황이다. 이때 나는?",
      "첫 수업이 끝나고 수업 내용중 궁금한점이 생겼다. 너무 궁금한데 이걸 교수님께 어떻게 여쭤보지?",
      "어느덧 시험 일주일 전이다. 발등에 불 떨어진 채로 친구와 중앙도서관에서 밤샘공부를 하기로 한 상황.. 그런데 막차도 끊긴 새벽 3시 너무 피곤하다며 같이 자기 자취방에 가서 자자고 제안한다. 이때 나는??",
      "힘들었던 시험이 드디어 끝났다! 날씨도 좋은데 수업도 일찍 끝나서 시간이 남았다. 이때 나는?",
      "오늘은 학교에서 동아리 설명회가 있는 날이다. 너무 많은 동아리들이 있는데... 이때 나는?",
      "이제 슬슬 진로를 정하고 스펙을 쌓아야하는데... 나한테는 어떤 직무가 잘 맞을까 고민이다. 이때 나는?",
      "MT 다음날 새벽 5시까지 동기들과 술을 마시는데 너무 피곤하다. 이때 친한 동기가 먼저 첫차타고 튀자고 꼬드기는데... 이때 나는?\n",
      "수업 들으러 가는 길 캠퍼스에서 학우가 캠페인를 위한 설문조사 참여를 부탁한다. 이때 나는??",
      "한학기가 드디어 끝났다! 마지막 수업이 끝나고 우연히 엘레베이터에서 교수님과 마주쳤다. 이때 다음 학기 수업에는 팀플이 나을지 개인과제가 나을지 질문하시는데... 이때 나는?",
    ];
    var pos = [
      //외향,j,봉사
      "옆자리 사람에게 먼저 이름을 물으며 다가간다",
      "궁금한건 못 참아! 수업 끝나고 바로 교수님께 가 질문한다",
      "안그래도 졸렸는데 잘됐다! 당장 친구 따라 가야지~ ",
      "내가 이번주 할일이 뭐가 있었지? 남은 시간에 쉬엄쉬엄 좀 해둘까?",
      "내 진로에 도움이 되는 동아리 설명을 들으러 가볼까?",
      "그래도 빨리 정할수록 좋으니까.. 선배들이나 학교 취업 상담팀의 도움을 받아볼까? ",
      "그래도 다 같이 놀았는데... 마지막까지 남아서 같이 치우고 다 같이 가야지",
      "캠페인? 날도 더운데 저 분들 힘드시겠다. 부탁하시는데 거절하기도 좀... 설문조사에 참여한다",
      "대학과제의 꽃은 팀플이죠! 학우들과 함께하는 팀플이 좋은것 같아요 ",
    ];
    var neg = [
      "옆자리 사람이 먼저 말을 걸어주기를 기다린다",
      "직접적으로 여쭤보긴 좀 그러니까 메일로 질문하거나 친구한테 물어본다",
      "아무래도... 다른 사람 집은 좀 불편해... 그냥 혼자 좀 더 공부하다가 첫차 타고 집 가서 쉴래",
      "지금 시간 되는 사람? 바로 친구랑 번개 약속 잡는다",
      "무조건 동아리는 재밌게 즐길 수 있는게 최고지 어떤 동아리가 제일 신나려나~",
      "졸업할때쯤이면 자연스럽게 정해지지 않을까? 일단 학교나 열심히 다녀야지",
      "안그래도 피곤한데 잘됐다. 얼른 짐 챙겨서 튀자!",
      "내 갈 길 바쁘다. 다음에 참여할게요~ 하고 지나간다",
      "아무래도 개인과제가 편해서 좋은것 같아요...! ",
    ];
  }

  //------------------과정--------------------------
  if (ff == 0) {
    $("#question").text(question[count]);
    $("#yes").text(pos[count]);
    $("#no").text(neg[count]);

    $("#yes").click(function () {
      switch (count) {
        case 0 || 1 || 2:
          extroverted += 1;
          break;
        case 3 || 4 || 5:
          jCount += 1;
          break;
        case 6 || 7 || 8:
          teamCount += 1;
          break;
      }
      count++;
      if (count == 9) {
        ff = 1;
        final();
        return;
      }
      document.getElementById("question_img").src =
        "../img/question/" + (count + 1) + ".png";
      $("#question").text(question[count]);
      $("#question_index").text("Q" + (count + 1));
      $("#yes").text(pos[count]);
      $("#no").text(neg[count]);
    });

    $("#no").click(function () {
      switch (count) {
        case 0 || 1 || 2:
          introverted += 1;
          break;
        case 3 || 4 || 5:
          pCount += 1;
          break;
        case 6 || 7 || 8:
          personalCount += 1;
          break;
      }
      count++;
      if (count == 9) {
        ff = 1;
        final();
        return;
      }
      document.getElementById("question_img").src =
        "../img/question/" + (count + 1) + ".png";
      $("#question").text(question[count]);
      $("#question_index").text("Q" + (count + 1));
      $("#yes").text(pos[count]);
      $("#no").text(neg[count]);
    });
  }

  //------------------결과 변수 선언-------------------------

  var resultFirst = [
    //result에 넣기
    "학술 동아리",
    "멘토링",
    "마케팅",
    "봉사활동",
    "홍보",
    "체육",
    "음악",
    "친목 동아리",
  ];
  var result = [
    "흥미있는 분야에 대해서는 누구보다 깊게 파고드는 당신에게 어울리는 대외활동은 학술동아리! 무의미하게 흘러가는 시간을 지루해하고 자기개발에 힘쓰는 걸 좋아해요. 모든 일에 계획을 세워두고 실천하는 편이라 자기통제력이 강하고 책임감도 있어서 주변인들에게 쉽게 호감을 사는 사람이에요.뭐든 열심히! 본인이 만족해야 직성이 풀리고 해낸 일에 대해 인정받고 싶은 경향이 강해요. 조별과제보다는 개인과제, 꼼수를 모르고 성실하게 목표를 향해 노력하는 타입입니다.",
    "진로에 대해 끊임없이 고민하고 이것저것 다양한 활동을 하지만 어딘가 비어있는 느낌이 들어요. 취업을 위해 무엇을 어떻게 준비해야 할지 모르겠고 현실적인 조언이 필요해요.",
    "'네가 추천해주는 건 안 살 수가 없어' 재빠른 눈치와 분석력을 활용한 족집게 추천 장인! 남들이 정해놓은 틀에 갇히지 않는 자유로운 영혼인 당신에게 어울리는 대외활동은 바로 마케팅이에요. 자율적으로 새로운 도전에 뛰어들어, 통통튀는 독창적인 아이디어를 제시해요. 사람들이 원하는 것을 누구보다 빠르게 캐치하는 분석력을 갖고 있어요.",
    "당신은 누군가를 도우며 뿌듯함을 느끼고 나눔을 실천할줄 아는 사람이에요.당신이 가지고 있는 능력과 열정으로 보다 따뜻한 사회를 만드는데 노력을 기울이고 싶은 사람이에요.그런 당신! 봉사활동이 잘 어울리시겠군요!청소년 멘토링, 교육봉사, 복지센터 봉사, 행사 자원봉사자 등 다양한 봉사를 실천할 수 있는 봉사활동이 정말 많은데요, 봉사활동을 통해 뜻깊은 대학생활을 보내보는건 어떨까요~?",
    "관심이 집중되는 곳에 빠지지 않는 인싸! 다양한 사람들에게 자신의 매력을 발산하는 댕댕이 같은 당신에게 어울리는 대외활동은 서포터즈에요. 트랜드나 유행에 민감하여 뉴미디어를 누구보다 잘 활용하는 능력자에요. 자신만의 감성과 스타일로 이목을 끄는 콘텐츠를 제작할 수 있는 금손이네요.",
    "어디서든 적응을 잘하고 친구와 어울리기를 좋아하는 당신에게 어울리는 대외활동은 체육! 도구를 다루는 데 능숙하고 다재다능하며, 현실적인 실용주의자로 직접 뛰어들어 체험을 통해 경험하는 활동을 좋아해요. 센스 있고 유머러스해서 주변인에게 쉽게 호감을 사는 사람이에요. 하고 싶은 것은 반드시 하고 말아야 하는 삶을 즐기며 사는 타입입니다.",
    "규칙 틀에 묶이는 것을 싫어하는 당신에게 어울리는 대외활동은 음악! 사람이나 사물을 다양한 시각에서 바라보고 편견을 거부해서 창의적인 아이디어를 뿜뿜 표출하는 사람이에요. 문학, 음악, 미술 분야에 관심이 많아 예술가 기질이 있어요. 본인이 하고자 하는 일에 열정적으로 몰두하며 사는 타입입니다.",
    "당신은 정열적이고 활기가 넘쳐 반복되는 일상을 재미없어하고 사람들과의 만남을 좋아해요.당신은 재미있고 도전적인 일에 흥미를 느껴 다양한 사람들과 다양한 활동을 하는것에 두려움이 없어요.그런 당신! 친목동아리가 잘 어울리시겠군요!친목동아리는 맛집탐방, 문화생활, 스포츠, 여행 등을 함께하며 새로운 사람들과 친목을 쌓는 동아리에요.다양한 개성을 가진 사람들과 신나게 놀며 즐거운 대학생을 보내보세요~",
  ];
  var relevant = [
    "학술 동아리가 어울리는 당신! 다양한 사람들과 교류를 통해 지식의 폭과 깊이를 넓혀갈 수 있는 CJ UNIT 내의 TF 활동은 어떤가요? CJ UNIT 내부에서는 자체적으로 유형테스트 개발TF, 메타버스TF. 스마트시티TF 등 개개인의 학업 목표에 따라 다양하게 선택가능한 활동들이 있습니다. 유닛 내에서 자유롭게 즐길 수 있는 TF활동을 통해서 모르는 분야에 대해 알아가는 시간을 가져보면 어떨까요?",
    "CJ UNIT 멘토링은 CJ올리브네트웍스 임직원과 함께합니다. AI Engineer, 시스템개발/운영, UX/UI, DBA, 경영지원, 인사 등 다양한 직무의 임직원 멘토와 매칭되어 현실적인 조언을 구할 수 있어요. CJ UNIT으로 활동하며 대외활동뿐만 아니라 진로, 취업 고민을 해결하고 꿀팁도 얻어가는 것은 어떤가요?",
    "새로운 도전에 열려 있는 당신! 다양한 TF 기회가 주어지는 CJ UNIT에 지원해보는 건 어떤가요? 기존 활동 외에 이모티콘, 유형 테스트 제작 등 원하는 만큼 얻어갈 수 있어요. 강사부문과 홍보부문 구분없이 서로 친해지는 건 덤!",
    "CJ UNIT SW창의캠프 대학생 봉사단을 아시나요? CJ UNIT은 IT교육격차 해소와 ICT창의인재 양성을 위해 중,고등학교 학생들에게 SW코딩 교육을 제공하는 현존하는 최고의 대학생 봉사단이에요! 코딩 실력이 뛰어나지 않아도 활동할 수 있으니 한번 지원해보실래요~?",
    "다양한 영상콘텐츠를 제작하여 홍보할 수 있는 CJ UNIT에서 당신의 제작능력을 뽐내보는 건 어떤가요? 뮤직비디오, 현장스케치, 쇼츠까지! 어떤 형태도 상관 없어요. 적극적인 지원 아래에서 만들고 싶은 게 무엇이든 직접 도전해보세요",
    "CJ SW창의캠프 대학생봉사단 CJ UNIT을 아시나요? 봉사단 활동이라고 그것만 하지 않는다는 사실! CJ UNIT에는 유닛 OB와 YB가 함께하는 FC UNIT이 존재한답니다! 전국 제패를 꿈꾸는 현존하는 최고의 풋살팀 FC 유닛! 더욱 돈독해지는 사이는 덤! 유닛이 된다면 누구나 함께할 수 있답니다! 같이 공 차고 싶으신 분! 지원해서 함께해요~!",
    "CJ SW창의캠프 대학생봉사단 CJ UNIT을 아시나요? 봉사단 활동이라고 그것만 하지 않는다는 사실! CJ UNIT에는 다양한 TF 활동이 존재해요! 원하는 활동이 있다면 TF팀을 이루어 재미있는 활동이 추가로 가능하답니다! 이모티콘 제작부터 유형 테스트 제작까지, 종류는 무궁무진! CJ UNIT에 지원해서 함께해요~! ( TF 활동은 매 기수 활동 내용이 달라질 수 있습니다.)",
    "SW창의캠프 대학생 봉사단인 CJ UNIT에서도 친목활동이 가능하다는 사실 알고 계신가요~?  CJ UNIT은 매주 조원들과의 식사, 한강피크닉, 야구관람 등 다양한 친목활동이 이뤄지고 있어요! 봉사도 하고 좋은 사람들과 놀러다니고 일석이조~!",
  ];
  //-----------------서버 없이 결과화면 렌더링 해주기 위한 함수-------------------------

  var timer;
  var forFinal = 0;
  //yes,no에서 count가 6이면 호출할 함수
  function final() {
    // document.getElementById("img").src =
    //   "https://yt3.ggpht.com/ytc/AKedOLRAL0GpI6urQS7hdcwVqGBWmgT_7Svl34RIymcdvg=s900-c-k-c0x00ffffff-no-rj";
    // document.getElementById("all").style.display = "none";
    // document.getElementById("gif").style.display = "block";
    // document.getElementById("banner").style.backgroundColor = "#ffffff";
    // document.getElementById("a").style.backgroundColor = "#ffffff";
    // //$("header").backgroundColor="white";

    // setTimeout(function () {
    //   document.getElementById("a").style.backgroundColor = "#ffffff";
    //   document.getElementById("all").style.display = "block";
    //   document.getElementById("gif").style.display = "none";
    //   document.getElementById("img").src = "banner2.png";
    //   document.getElementById("banner").style.backgroundColor = "#90268f";
    // }, 3000); // 5초후 go() 함수를 호출한다

    // document.getElementById("img").style.width = "300px";
    document.getElementById("text1").style.display = "block";
    document.getElementById("text2").style.display = "block";
    document.getElementById("unit_info").style.display = "block";
    document.getElementById("unit_activity").style.display = "block";
    document.getElementById("gotoCJ").style.display = "block";
    // document.getElementById("logo").style.display = "block";

    //결과값 계산
    var resultString = "";
    var energy = introverted > extroverted ? "introverted" : "extroverted",
      identity = jCount > pCount ? "J" : "P",
      personal = personalCount > teamCount ? "personal" : "team";
    //0학술 1멘토링 2마케팅 3봉사 4홍보 5체육 6음악 7친목
    if (energy == "introverted") {
      if (identity == "J") {
        if (personal == "personal") {
          //학술
          index = 0;
          resultString = "study";
        } else {
          //멘토링
          index = 1;
          resultString = "mentoring";
        }
      } else {
        if (personal == "personal") {
          //마케팅
          index = 2;
          resultString = "marketing";
        } else {
          //봉사
          index = 3;
          resultString = "volunteer";
        }
      }
    } else {
      if (identity == "J") {
        if (personal == "personal") {
          //홍보
          index = 4;
          resultString = "hongbo";
        } else {
          //체육
          index = 5;
          resultString = "gym";
        }
      } else {
        if (personal == "personal") {
          //음악
          index = 6;
          resultString = "music";
        } else {
          //친목
          index = 7;
          resultString = "chinmok";
        }
      }
    }
    // $("#count").value = index;

    $("#question").height = "500px";
    $("#content").paddingTop = "10px";
    $("#content").fontFamily = "Jua";
    $("#content").fontSize = "15px";
    $("#content").backgroundColor = "#f5e6fd";

    $("#btn1").fontSize = "20px";
    $("#btn2").fontSize = "20px";
    $("#btn1").width = "40px";
    $("#btn2").width = "40px";
    yes.fontSize = "20px";
    no.fontSize = "20px";
    yes.text("테스트 다시하기");
    no.text("공약 더 둘러보기 ");
    document.getElementById("question_img").src =
      "../img/result/" + resultString + ".png";

    $("#btn1").css("display", "none");
    $("#btn2").css("display", "none");
    $("#question_index").css("display", "none");
    $("#btn3").css("display", "block");
    $("#btn4").css("display", "block");
    $("h1").css("display", "block");
    $("#answer").css("padding-bottom", "0px");
    $("#text1").text("나에게 어울리는 대외활동은?");
    $("#text2").text(resultFirst[index]);
    $("#relevant").text(relevant[index]);
    $("#question").text(result[index] + "\n\n\n");
    $("#content").text(result[index]);
  }
});
