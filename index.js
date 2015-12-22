$(document).ready(function(){
	$.fn.wx_refresh = function (init) {
		var _start = 0;
        var _move = -22;
        var _moveEnd = 0;
        var _logStatus = "down";
		// var _html = "<div id='wx_pullDown'><span class='visc_pullUpIcon'></span><div class='visc_pullUpDiv'><span class='visc_pullUpLabel'>上拉刷新</span></div></div>";
		// var _near = 0;

        function changeRefreshLog(){
            
            if(_logStatus == "loading"){
                $(".visc_pullUpIcon").removeClass("wx_loading");
            }
            
            if(_move - _moveEnd < _move){
                if( _logStatus == "up"){
                    return;
                }
                
                $(".visc_pullUpIcon").addClass("wx_refresh");
                _logStatus = "up";
            }else{
                if( _logStatus == "down"){
                    return;
                }
                
                $(".visc_pullUpIcon").removeClass("wx_refresh");
                _logStatus = "down";
            }
        }
        
        this.on("touchstart",function(e){
            
            _moveEnd = _move;
            changeRefreshLog();
            
        });
        
		this.on("touchmove",function(e){      
			console.log($(document).scrollTop());

						
			if($(document).scrollTop()=="0"){                         
                
                 _start =  _start || (e.originalEvent.changedTouches)[0].clientY;
				
                 var _clientY = (e.originalEvent.changedTouches)[0].clientY;
                  _moveEnd = _move + (_clientY-_start);
               
               changeRefreshLog();
                if(_moveEnd>=_move){
                    //滑动时去掉过渡动画
			        $(this).css({translation:"transform 0s ease-out 0s","-webkit-transition":"-webkit-transform 0s ease-out 0s","-moz-transition":"transform 0s ease-out 0s","-o-transition":"transform 0s ease-out 0s"});
                	$(this).css({transform:"translate(0px, "+ _moveEnd +"px) scale(1) translateZ(0px)"});
                	e.preventDefault();
                }else{                   
                    $(document).scrollTop(1);
                }
              
            }else{
                _start = 0;
                return;
            }
		});
		
		this.on("touchend",function(e){
            
            _start = 0;
            //添加过渡动画
            $(this).css({ translation: "transform 0.5s ease-out 0s", "-webkit-transition": "-webkit-transform 0.5s ease-out 0s", "-moz-transition": "transform 0.5s ease-out 0s", "-o-transition": "transform 0.5s ease-out 0s" });
            
            if(_move - _moveEnd < _move){
                init.pullDown(initLoading);
                $(this).css({ transform: "translate(0px, 0px) scale(1) translateZ(0px)"});
                
                $(".visc_pullUpIcon").removeClass("wx_refresh");
                $(".visc_pullUpIcon").addClass("wx_loading");
                _logStatus = "loading";
            }else{ 
                $(this).css({ transform: "translate(0px, " + _move + "px) scale(1) translateZ(0px)" });
            }
		});

		var _that = this;
        function initLoading(e) {
			_move = 0 - $("#wx_pullDown").height();
            _moveEnd = _move;
			_that.css({translation:"transform 0.2s ease-out 0s","-webkit-transition":"-webkit-transform 0.2s ease-out 0s","-moz-transition":"transform 0.2s ease-out 0s","-o-transition":"transform 0.2s ease-out 0s"});
			_that.css({transform:"translate(0px, " + _move + "px) scale(1) translateZ(0px)"});
            changeRefreshLog();
		}
		setTimeout(initLoading);
		
		return this;	
	}
    
	$(".wx_pullLoading").wx_refresh({pullDown:function(initLoading){
        console.log("pullDownFunction");
        
        //数据获取完毕后调用pullDown的参数（initLoading）来通知下拉插件
        setTimeout(initLoading,5000);
    }});
});