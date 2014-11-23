/*
===============================================================================
Basic Xojo highlighter. Dr G Pettet 23/11/14
===============================================================================
*/

Prism.languages.xojo = {
	comment: /('|\/\/|\brem\b).*/,
	string: /\"[^\"\\\n]*(?:\\.[^\"\\\n]*)*\"/,
	operator: /[-+*\/]|=?\&lt;|=?\&gt;|=/,
	number: /\b(?:[+-]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?)|(?:0x[a-f0-9]+)\b/,
	keyword: /\b(?:AddHandler|AddressOf|Aggregates|And|Array|As|Assigns|Attributes|Break|ByRef|ByVal|Call|Case|Catch|Class|Const|Continue|CType|Declare|Delegate|Dim|Do|DownTo|Each|Else|Elseif|End|Enum|Event|Exception|Exit|Extends|False|Finally|For|Function|Global|GoTo|Handles|If|Implements|In|Inherits|Inline68K|Interface|Is|IsA|Lib|Loop|Me|Mod|Module|Namespace|New|Next|Nil|Not|Object|Of|Optional|Or|ParamArray|Private|Property|Protected|Public|Raise|RaiseEvent|Rect|Redim|RemoveHandler|Return|Select|Self|Shared|Soft|Static|Step|Sub|Super|Then|To|True|Try|Until|Using|Wend|While|With|WeakAddressOf|Xor)\b/i
}




