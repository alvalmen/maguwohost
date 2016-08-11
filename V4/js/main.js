$(function() {      
  var slider = $('.slider'),
    sliderContent = slider.html(),                      // ���������� ��������
    slideWidth = $('.slider-box').outerWidth(),         // ������ ��������
    slideCount = $('.slider img').length,               // ���������� �������
    prev = $('.slider-box .prev'),                      // ������ "�����"
    next = $('.slider-box .next'),                      // ������ "������"
    sliderInterval = 3300,                              // �������� ����� �������
    animateTime = 1000,                                 // ����� ����� �������
    course = 1,                                         // ����������� �������� �������� (1 ��� -1)
    margin = - slideWidth;                              // �������������� �������� �������
 
  $('.slider img:last').clone().prependTo('.slider');   // ����� ���������� ������ ���������� � ������.
  $('.slider img').eq(1).clone().appendTo('.slider');   // ����� ������� ������ ���������� � �����.  
  $('.slider').css('margin-left', -slideWidth);         // ��������� .slider ���������� ����� �� ������ ������ ������.
 
  function nextSlide(){                                 // ����������� ������� animation(), ����������� ����� �������.
    interval = window.setInterval(animate, sliderInterval);
  }
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     // ���� ������� ����� �� �����
      slider.css({'marginLeft':-slideWidth});           // �� ���� .slider ������������ � ��������� ���������
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // ���� ������� ��������� � ������ � ������ ������ "�����"
      slider.css({'marginLeft':-slideWidth*slideCount});// �� ���� .slider ������������ � �������� ���������
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // ���� ������� ���� �� ���������,
    margin = margin - slideWidth*(course);              // �������� margin ��������������� ��� ������ ���������� ������
    }
    slider.animate({'marginLeft':margin},animateTime);  // ���� .slider ��������� ����� �� 1 �����.
  }
 
  function sliderStop(){                                // ������� ������������������ ������ ��������      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               // ������ ������ "�����"
    if (slider.is(':animated')) { return false; }       // ���� �� ���������� ��������
    var course2 = course;                               // ��������� ���������� ��� �������� �������� course
    course = -1;                                        // ��������������� ����������� �������� ������ ������
    animate();                                          // ����� ������� animate()
    course = course2 ;                                  // ���������� course ��������� �������������� ��������
  });
  next.click(function() {                               // ������ ������ "�����"
    if (slider.is(':animated')) { return false; }       // ���� �� ���������� ��������
    var course2 = course;                               // ��������� ���������� ��� �������� �������� course
    course = 1;                                         // ��������������� ����������� �������� ������ ������
    animate();                                          // ����� ������� animate()
    course = course2 ;                                  // ���������� course ��������� �������������� ��������
  });
 
  slider.add(next).add(prev).hover(function() {         // ���� ������ ���� � �������� ��������
    sliderStop();                                       // ���������� ������� sliderStop() ��� ������������ ������ ��������
  }, nextSlide);                                        // ����� ������ ������ �� ��������, �������� ��������������.
 
  nextSlide();                                          // ����� ������� nextSlide()
});
/*
������� �������������� �������������. �� ��������� �������� ���� ����� �������, �� ��� ������������� ����� �������� ����������� ��� �������� ��� ������ ���������� course. ��� ��������� �������� ���������� � 1 �� -1, ���������� ��������� ����������� �������� ��������.

����������� � �������� �� ������ �������� ����� ������ ��������� � �������� ��������. ��� ���� ��� ��������? ��� ������. ���� ������ ���� ���������� �� ��������, ������, ���������� ����� ��������������� ��� ����������. � ��� ����� �� ����� ������ ������ �������������.
*/