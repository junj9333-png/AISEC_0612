
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

//d1.set_img(0,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})
let d1 = new DataSet("로또번호 예측 선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("1.1 데이터 수집 및 전처리")//서브 타이틀
d1.set_img(0,{imgtitle:"1.원천데이터수집",imgurl:"https://drive.google.com/file/d/1XKGyB0bi8X3sIIjwJ56iShhW-BFiHXyl/view?usp=drive_link",imglog:"로또365 페이지를 이용하여 1회차 ~ 1183회차 로또 당첨번호 수집",sourceurl:"https://dhlottery.co.kr/common.do?method=main"})
d1.set_img(0,{imgtitle:"2.데이터 변환",imgurl:"https://drive.google.com/file/d/1VVRndnZ31L8mm2Ca4O57zdJGwFGWKBnu/view?usp=drive_link",imglog:"xlsx 형식의 데이터를 pandas 에서 로딩하기 편리하도록 csv 파일로 변환",sourceurl:""})
d1.set_img(0,{imgtitle:"3.csv파일 읽기와 시계열 데이터 생성 모듈 구성",imgurl:"https://drive.google.com/file/d/1B2D6wKeu8kNxfTbqyBGyAWKgEfsJ1hV1/view?usp=drive_link",imglog:"DAS에 저장된 csv 파일 불러오는 readFileData모듈과 시간 스탭에 따른 시계열 데이터 생성 모듈 구현",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(0,{imgtitle:"4.데이터 전처리",imgurl:"https://drive.google.com/file/d/11hdEk2aybyXsN3ugBcRuAM7eCKjIvcPC/view?usp=drive_link",imglog:"환경상수설정 및 날짜 데이터 변환과 밀리타임필드 추가 ",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(0,{imgtitle:"5.데이터분석",imgurl:"https://drive.google.com/file/d/1h9Cw7L46T7Cv3dfVLlgz-ftIHq0ruZNH/view?usp=drive_link",imglog:"판다스통계를 이용한 데이터 분석",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(0,{imgtitle:"6.데이터 분석 및 통계",imgurl:"https://drive.google.com/file/d/15klYV1-z3pMnDij7Pybw_PUktOg7g1a1/view?usp=drive_link",imglog:"데이터 박스플롯과 히스토그램으로 데이터 분포 및 이상치 데이터 시각화 확인 후 통계 출력",sourceurl:""})
d1.set_img(0,{imgtitle:"7.밀집 데이터 복원 함수",imgurl:"https://drive.google.com/file/d/1_pd2eFd38iD1-OPOTaHNFO0tyb92MMMz/view?usp=drive_link",imglog:"스케일링 된 정답 데이터를 원래의 스케일링으로 복원 모듈 생성 및 테스트",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_content("1.2 회귀예측 모델 구성")//서브 타이틀
d1.set_img(1,{imgtitle:"8.시계열 데이터 생성",imgurl:"https://drive.google.com/file/d/1yIq16Rh7G3irLqPM0sq-Tt1vncGAbW5M/view?usp=drive_link",imglog:"타임스텝에 따른 시계열 훈련 데이터 생성",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(1,{imgtitle:"9.LSTM 및 ConvLSTM1D 순차모델 구성",imgurl:"https://drive.google.com/file/d/1F2oFXywDaLk1A0Zgh0CezDIdHOyFy2V_/view?usp=drive_link",imglog:"환경설정에 따른 LSTM 또는 ConvLSTM1D 모델을 구축 및 컴파일",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(1,{imgtitle:"10.조기종료 / 출력callback함수 훈련 실행",imgurl:"https://drive.google.com/file/d/1kpTFLzRaVi0Rs-EOz9M2jl4WPBzyEEkF/view?usp=drive_link",imglog:"최적값 수렴 후 훈련 조기종료와 훈련과정 verbose callback 함수 등록 후 훈련 실시",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(1,{imgtitle:"11.훈련 결과 시각화",imgurl:"https://drive.google.com/file/d/1_UtbVnDDolWbD6tiznKtbgH_cDysvuMD/view?usp=drive_link",imglog:"MSE, MAE LOSS 시각화 그래프 ",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(1,{imgtitle:"12.모델 정확률 오차율 산정",imgurl:"https://drive.google.com/file/d/1oftj6l4ZkcBqJzwibLOtsb3wB9MenPAC/view?usp=drive_link",imglog:"모델의 평균 오차율과 필드별 오차율 산정",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_img(1,{imgtitle:"13.모델 저장 및 실제 예측값 출력",imgurl:"https://drive.google.com/file/d/1sY8KH1i1o35wiArfzCDSKgvhcSc1xBKY/view?usp=drive_link",imglog:"다음 회차 번호 예측",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/jupyer_ai/lotto_rnn%20(1).ipynb"})
d1.set_content("1.3 코드 리팩토링")//서브 타이틀
d1.set_img(2,{imgtitle:"14. 코드 리팩토링",imgurl:"https://drive.google.com/file/d/1VcuDQ_1y0O7dMo8LyIvQgSc9UrCj4NTM/view?usp=drive_link",imglog:"저장된 모델 불러오기, 데이터 전처리, 스케일링 복원, 예측 출력, 모델 업그레이드(미구현), 오차율 출력, 번호 예측 출력 실행 시점 모듈",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/service_model.py"})
d1.set_img(2,{imgtitle:"15.프로젝트 디렉토리 구성",imgurl:"https://drive.google.com/file/d/1_1iuM96CmUJZLEj92MCK0lemBCMyIgFK/view?usp=drive_link",imglog:"모델디렉토리 및 서비스 페이지 분리",sourceurl:"https://github.com/junj9333-png/AISEC_0612/tree/main/lotto_AI"})
d1.set_content("1.4 플라스크 미들웨어 구성")//서브 타이틀
d1.set_img(3,{imgtitle:"16.인덱스 페이지 라우팅",imgurl:"https://drive.google.com/file/d/1vWElPwU5-_5iXDHN4W-Nn65-qYGroJxL/view?usp=drive_link",imglog:"템플릿츠 디렉터리의 최초 인덱스 페이지 출력 주소 라우팅",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/WebFlask.py"})
d1.set_img(3,{imgtitle:"17.모델 예측 실행 페이지 라우팅",imgurl:"https://drive.google.com/file/d/1-VqIVerORXEn14TLvQNLkijaWyrTDAca/view?usp=drive_link",imglog:"예측 날짜 모델명  파라미터 수신 후 모델의 예측값 형식에 따른 JSON 데이터로 송출",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/WebFlask.py"})
d1.set_img(3,{imgtitle:"18.플라스크 미들웨어 가동",imgurl:"https://drive.google.com/file/d/15IVWgfeEXUUwfsA3YOpd2M5H97ziy7Kf/view?usp=drive_link",imglog:"플라스크 미들웨어 서버 가동 화면 스냅샷(웹서버 연동 미구현)",sourceurl:""})
d1.set_content("1.5 사용자 UI 구현")//서브 타이틀
d1.set_img(4,{imgtitle:"19.사용자 인덱스 페이지 액세스",imgurl:"https://drive.google.com/file/d/1zrSiIb5tKczX2fcz_SzG_0OlmbUn4KLM/view?usp=drive_link",imglog:"이용자가 접근할 최초 인덱스 페이지 스냅샷(예측 날짜 및 모델 선택 가능)",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/templates/index.html"})
d1.set_img(4,{imgtitle:"20.모델별 타임스텝별 예측 서비스 선택",imgurl:"https://drive.google.com/file/d/1S4IlHWYnLFeTpPRBa4ESpwnF6j1-3fgD/view?usp=drive_link",imglog:"원하는 날짜와 지정된 모델별 타임스텝별 서비스 항목 선택",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/templates/index.html"})
d1.set_img(4,{imgtitle:"21.예측 진행중 스냅샷",imgurl:"https://drive.google.com/file/d/1vX4rsKrQrnqBhJ9YcH3a0C7KZPwTma0m/view?usp=drive_link",imglog:"이용자 서비스 요구시 미들웨어로 부터 예측값 출력 수신 로딩 화면 스냅샷",sourceurl:"https://github.com/junj9333-png/AISEC_0612/blob/main/lotto_AI/templates/index.html"})
d1.set_content("1.6 로또 예측 서비스 구동")//서브 타이틀
d1.set_img(5,{imgtitle:"22.예측 결과 스냅샷",imgurl:"https://drive.google.com/file/d/1Q3BhmCbe5OHLRRnqjDiV5hCXjj8Glaoz/view?usp=drive_link",imglog:"각 번호별 예측 번호 추출과 오차확률 출력",sourceurl:""})
d1.set_img(5,{imgtitle:"23.모델별 다중 예측 진행중 스냅샷",imgurl:"https://drive.google.com/file/d/12Q8Wre-jadilyb9fARZ4i3Grb8Cu5W9u/view?usp=drive_link",imglog:"기존 예측과 다른 모델의 예측 결과 비교를 위한 다중모델 예측 진행 스냅샷",sourceurl:""})
d1.set_img(5,{imgtitle:"24.모델별 다중예측 결과 스냅샷",imgurl:"https://drive.google.com/file/d/1CwM-nkaDQ35EomNPDyKo9kQ06H2TlirL/view?usp=drive_link",imglog:"원하는 모델 선택 후 예측 결과를 모델별로 비교 분석할 수 있는 다중모델예측 결과 스냅샷",sourceurl:""})
d1.set_img(5,{imgtitle:"25.원하는 모델을 선택하여 여러 예측값 출력",imgurl:"https://drive.google.com/file/d/1VXproNUhNWH139E3lgIm5LXkblm0sWaA/view?usp=drive_link",imglog:"원하는 모델 선택 후 여러 모델의 예측값을 조합하여 번호를 선택할 수 있는 결과 스냅샷",sourceurl:""})


d1.set_fill("로또 추첨일의 날짜로 당첨번호를 스케일링 한 후 두가지 유형의 모델로 예측값과 오차를 출력, 차후 각 번호의 자리별 다중분류(softmax) 형태의 예측값 출력 예정")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀

data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

data_sets.push(d4)
