function trash(var)
    if var.v1:find("OnDialogRequest") then
    if var.v2:find("trash_item") then
    
    id=var.v2:match("itemID|(%d+)")
    n=var.v2:match("you have (%d+)")
    LogToConsole(id..n)
    SendPacket(2,[[action|dialog_return
    dialog_name|trash_item
    itemID|]]..id..[[|
    count|]]..n)
    end
    return true
    end
    return false
    end
    AddHook(trash,"OnVariant")