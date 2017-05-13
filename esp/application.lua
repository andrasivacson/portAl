-- server listens on 80, if data received, print data to console and send "hello world" back to caller
-- 30s time out for a inactive client

led = 4
gpio.mode(led,gpio.OUTPUT) -- Assign GPIO to Output
_GET = {}

srv=net.createServer(net.TCP, 30) 
srv:listen(80,function(conn) 
    conn:on("receive",function(client, request) 
        print(client)
        
        local buf = "";
        local _, _, method, path, vars = string.find(request, "([A-Z]+) (.+)?(.+) HTTP");
        if(method == nil)then
            _, _, method, path = string.find(request, "([A-Z]+) (.+) HTTP");
        end
        
        if (vars ~= nil)then
            for k, v in string.gmatch(vars, "(%w+)=(%w+)&*") do
                _GET[k] = v
            end
        end
        buf = buf.."<h1> ESP8266 Web Server</h1>";
        buf = buf.."<p>GPIO0 <a href=\"?pin=ON1\"><button>ON</button></a>&nbsp;<a href=\"?pin=OFF1\"><button>OFF</button></a></p>";
        buf = buf.."<p>GPIO2 <a href=\"?pin=ON2\"><button>ON</button></a>&nbsp;<a href=\"?pin=OFF2\"><button>OFF</button></a></p>";

        if _GET.led == "true" then
              gpio.write(led, gpio.LOW)
        elseif _GET.led == "false" then
              gpio.write(led, gpio.HIGH)
        end
        print(_GET.led)
        print(_GET.led == true)
        
        client:send(buf)
        client:close();
        collectgarbage();
    end) 
end)
