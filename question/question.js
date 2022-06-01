$(function () {
  let introvert = 0,
    planned = 0,
    dedicated = 0;

  var post = $("#post"),
    yes = $("#yes"),
    no = $("#no");

  var count = 0,
    flag = 0;
  var i = 0,
    ff = 0;
  {
    var question = [
      "1. 입학 후 첫 수업날 강의실에 일찍 도착했다! 그런데... 모르는 사람과 단 둘이 옆자리에 앉아 서로 눈치만 보고 있는 상황이다. 이때 나는?",
      "2. 첫 수업이 끝나고 수업 내용중 궁금한점이 생겼다... 너무 궁금한데 이걸 교수님께 어떻게 여쭤보지?",
      "3. 어느덧 시험 일주일 전이다. 발등에 불 떨어진 채로 친구와 중앙도서관에서 밤샘공부를 하기로 한 상황.. 그런데 막차도 끊긴 새벽 3시 너무 피곤하다며 같이 자기 자취방에 가서 자자고 제안하는데... 이때 나는?",
      "4. 힘들었던 시험이 드디어 끝났다! 날씨도 좋은데 수업도 일찍 끝나서 시간이 남았다. 이때 나는?",
      "5. 오늘은 학교에서 동아리 설명회가 있는 날이다. 너무 많은 동아리들이 있는데... 이때 나는?",
      "6. 이제 슬슬 진로를 정하고 스펙을 쌓아야하는데... 나한테는 어떤 직무가 잘 맞을까 고민이다... 이때 나는?",
      "7. MT 다음날 새벽 5시까지 동기들과 술을 마시는데 너무 피곤하다... 이때 친한 동기가 먼저 첫차타고 튀자고 꼬드기는데... 이때 나는?",
      "8. 수업 들으러 가는 길 캠퍼스에서 누가 캠페인 참여를 부탁한다! 설문조사 참여를 부탁 받는데... 이때 나는?",
      "9. 한학기가 드디어 끝났다! 마지막 수업이 끝나고 우연히 엘레베이터에서 교수님과 마주쳤다. 이때 다음 학기 수업에는 팀플이 나을지 개인과제가 나을지 질문하시는데... 이때 나는?",
    ];
    var pos = [
      "뭐니뭐니해도 집이 최고! 방 안에서 뒹굴뒹굴거린다",
      "관심 있는 분야, 혹은 취미생활을 즐기기 위한 동아리 활동!",
      "만나보지도 못한 동기와 선배들, 경험하지 못한 새내기 대학생활",
      "쨍쨍한 햇빛 받으며 수업 들으러 가며 보는 일감호",
      "한학기 쓰고 버릴건데 너무 비싸!! 아까운 내 돈...",
      "가족들과 혹은 혼자 집에서 편하게 시청한다.",
    ];
    var neg = [
      "이런 날 활동적인 걸 해야지! 밖에 나가서 친구들과 논다",
      "공대생들만을 위한 각종 이벤트, 공모전 등 공대의 다양한 행사!",
      "영화관, 콘서트 등 마음껏 즐기지 못한 문화생활",
      "퇴근 후 무거운 몸을 이끌고 가며 보는 운치 있는 일감호",
      "책 사러 갈 시간도 없고 사러 나가기 너무 귀찮아!",
      "친구들과 다 같이 모여서 떠들며 신나게 응원한다.",
    ];
  }
  if (ff == 0) {
    $("#post").text(question[count]);
    $("#yes").text(pos[count]);
    $("#no").text(neg[count]);
    $("#yes").click(function () {
      switch (count) {
        case 0:
          array[1] += 2;
          array[3] += 3.5;
          break;
        case 1:
          array[8] += 3.5;
          break;
        case 2:
          array[0] += 3;
          break;
        case 3:
          break;
        case 4:
          array[2] += 3.5;
          break;
        case 5:
          break;
      }
      count++;
      if (count == 6) {
        ff = 1;
        final();
        return;
      }
      $("#post").text(question[count]);
      $("#yes").text(pos[count]);
      $("#no").text(neg[count]);
    });
    $("#no").click(function () {
      switch (count) {
        case 0:
          array[0] += 1;
          array[6] += 1;
          break;
        case 1:
          array[6] += 1;
          array[7] += 3.1;
          break;
        case 2:
          array[1] += 1.5;
          break;
        case 3:
          array[4] += 4;
          array[5] += 3;
          array[0] -= 1;
          break;
        case 4:
          array[5] += 3;
          break;
        case 5:
          array[6] += 2;
          break;
      }
      count++;
      if (count == 6) {
        ff = 1;
        final();
        return;
      }
      $("#post").text(question[count]);
      $("#yes").text(pos[count]);
      $("#no").text(neg[count]);
    });
  }
});
